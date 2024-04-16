

export const getAllItemsToBuy = async () => {
    let params = new URLSearchParams(location.search);
    let id = params.get('id');

    let key = JSON.parse(sessionStorage.getItem(id));
    // console.log(key);
    sessionStorage.removeItem("IsThisFirstTime_Log_From_LiveServer");

    return key;
};