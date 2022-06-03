// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract MultiDelegateCall {
    function multiCall(address[] calldata targets, bytes[] calldata data) external returns (bytes[] memory)
    {
        require(
            targets.length == data.length,
            "Target and Data length mismatch"
        );

        bytes[] memory results = new bytes[](data.length);

        for (uint256 i; i < targets.length; i++) {
            (bool success, bytes memory result) = targets[i].delegatecall(
                data[i]
            );
            require(success, "failed");

            results[i] = result;
        }

        return results;
    }
}

contract NFTContract is ERC721URIStorage, Ownable, MultiDelegateCall{
    
    struct Schema{
        string name;
        string image;
        string description;
        uint256 points;
        string externalLink;
    }

    uint256 constant public BASE_TEMPLATE_ID = 1000000;
    uint256 public templateCount;
    mapping(uint256 => Schema) public metaData;
    mapping(uint256 => uint256) public totalMintedNFTs;
    string public baseURI;

    event templateCreated(uint256 templateId, uint256 createdAt);
    event pointUpdated(uint256 tokenId,uint256 points, uint256 updatedAt);
    event externalLinkUpdated(uint tokenId,string externalLink, uint256 updatedAt);
    event randomMint(address to,uint templateId,uint tokenId);
    event memoMint(uint indexed tokenId,string indexed memo);

    constructor(string memory _name, string memory _symbol, string memory _basTokenUri) ERC721(_name, _symbol) {
        baseURI = _basTokenUri;
    }

    // ------------OWNER FUNCTIONS---------------

    function addNewTemplate(Schema memory _newTemplate) external onlyOwner{
        templateCount++;
        uint templateId = templateCount*BASE_TEMPLATE_ID;
        metaData[templateId]= _newTemplate;
        emit templateCreated(templateId, block.timestamp);
    }

    function updatePoint(uint256 _tokenId,uint256 _points) external onlyOwner{
        require(ownerOf(_tokenId) != address(0), 'Error: Invalid TokenId!!');
        metaData[_tokenId].points = _points;
        emit pointUpdated(_tokenId, _points, block.timestamp);
    }

    function updateExternalLink(uint _tokenId,string memory _externalLink) external onlyOwner{
        require(ownerOf(_tokenId) != address(0), 'Error: Invalid TokenId!!');
        metaData[_tokenId].externalLink = _externalLink;
        emit externalLinkUpdated(_tokenId, _externalLink, block.timestamp);
    }

    function mint(address _to,uint256 _templateId) public onlyOwner returns(uint){
        require(templateCount*BASE_TEMPLATE_ID >= _templateId, 'Error: Invalid template Id!!');
        totalMintedNFTs[_templateId] +=1;
        uint256 tokenId = _templateId + totalMintedNFTs[_templateId];
        _mint(_to, tokenId);
        metaData[tokenId] = metaData[_templateId];
        return tokenId;
    }

    function batchMint(address _to,uint256 _templateId, uint256 _totalNFTs) external onlyOwner{
        for(uint256 i = 0;i < _totalNFTs;i++){
            mint(_to, _templateId);
        }
    }

    function setBaseTokenURI(string calldata _uri) external onlyOwner() {
        baseURI = _uri;
    }

    //---------------User Functions--------------

    function templateData(uint256 _templateId) external view returns(Schema memory){
        require(templateCount >= (_templateId/BASE_TEMPLATE_ID),'Error: Invalid template Id');
        return metaData[_templateId];
    }

    function getMetaData(uint256 _tokenId) external view returns(Schema memory){
        require(ownerOf(_tokenId) != address(0), 'Error: Invalid TokenId!!');
        return metaData[_tokenId];
    }

    function burn(uint _tokenId) external {
        require(ownerOf(_tokenId) != address(0), 'Error: Invalid TokenId!!');
        _burn(_tokenId);
    }

    function _baseURI() internal override view returns (string memory) {
        return baseURI;
    }
}

contract Helper {
    function mintdata(address _to, uint _tempId) public pure returns (bytes memory){
        return abi.encodeWithSelector(NFTContract.mint.selector, _to, _tempId);
    }

    function updatedata(uint _tokenId, uint _points) public pure returns (bytes memory){
        return abi.encodeWithSelector(NFTContract.updatePoint.selector, _tokenId, _points);
    }
}