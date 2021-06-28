
handlers.LoginCheck = () =>
{
    let userData = GetUserReadOnlyData().Data;

    const now = new Date();

    if(!userData.hasOwnProperty("last_login"))
    {// create player data
        
    }
    else
    {// update login data
        let lastLogin = new Date(userData.last_login);

        if(lastLogin.getDate() != now.getDate())
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

    UpdateUserReadOnlyData_internal("last_login", now.toLocaleString("ja"));
}