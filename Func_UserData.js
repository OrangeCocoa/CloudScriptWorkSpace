function GetUserReadOnlyData()
{
    return server.GetUserReadOnlyData({ PlayFabId: currentPlayerId });
}

function GetUserReadOnlyData(jsonKey)
{
    let resultData = server.GetUserReadOnlyData({ PlayFabId: currentPlayerId }).Data;

    if (resultData.hasOwnProperty(jsonKey))
    {
        return JSON.parse(resultData[jsonKey].Value);
    }
    
    return JSON.stringify({});
}

function UpdateUserReadOnlyData(jsonKey, jsonValue)
{
    var dataPayload = {};
    var keyString = jsonKey;
    dataPayload[keyString] = JSON.stringify(jsonValue);

    return server.UpdateUserReadOnlyData({ PlayFabId: currentPlayerId, Permission: "Private", Data: dataPayload });
}