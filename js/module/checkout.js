

export const getAllItemsToBuy = async () => {
    sessionStorage.removeItem("IsThisFirstTime_Log_From_LiveServer");

    let params = new URLSearchParams(location.search);
    let id = params.get('id');

    let key = JSON.parse(sessionStorage.getItem(id));
    // console.log(key);

    return key;
};