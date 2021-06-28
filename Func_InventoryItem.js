function DeleteItem(itemInstanceId)
{
    server.RevokeInventoryItem({PlayFabId: currentPlayerId, ItemInstanceId: itemInstanceId});
}

