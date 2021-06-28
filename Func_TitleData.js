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