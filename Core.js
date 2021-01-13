
handlers.LoginCheck = () =>
{
    let userDataResult = GetUserReadOnlyData();

    if(!userDataResult.Data.hasOwnProperty("last_login"))
    {// create player data

    }
    else
    {// update login data
        let lastLogin = new Date(userDataResult.Data["last_login"]);

        if(lastLogin.getDate() != new Date().getDate())
        {
            // login day +1
            //UpdatePlayerStatistics_internal("login_day_count",++1);
        }

        let yesterday = new Date();
        yesterday.setDate(date.getDate() - 1);

        if(lastLogin.getDate() == yesterday.getDate())
        {
            // continuous login +1
        }
    }

    UpdateUserReadOnlyData_internal("last_login", Date.now());
}

function GetTitleData(jsonKey)
{
    let getDataResult = server.GetTitleData({ Keys: [jsonKey] });
    let data = getDataResult.Data[jsonKey];
    let result = JSON.parse(data);

    return result;
}

function GetTitleInternalData(jsonKey)
{
    let titleDataResult = server.GetTitleInternalData({ Keys: [jsonKey] });
    let data = titleDataResult.Data[jsonKey];
    let result = JSON.parse(data);

    return result;
}

function GetUserReadOnlyData()
{
    return server.GetUserReadOnlyData({ PlayFabId: currentPlayerId });
}

function GetUserReadOnlyData(jsonKey)
{
    let userDataResult = server.GetUserReadOnlyData({ PlayFabId: currentPlayerId });

    if (userDataResult.Data.hasOwnProperty(jsonKey))
    {
        return JSON.parse(userDataResult.Data[jsonKey].Value);
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