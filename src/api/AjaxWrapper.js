


const responseMapper = response =>Promise.all([response, response.json()]).then((res) => {
    return JSON.stringify({
        status: res[0].status,
        data: res[1]
    })
});


const AjaxWrapper = {

    get: (url) => {

        return fetch(url, {
            method: 'GET',
            credentials: 'same-origin'
        }).then((res) => {
            return res.status >=300 ? responseMapper(res) : res.text();
        }).then((text) => {
            return text.length ? JSON.parse(text) : {};
        })
    }
}


export default AjaxWrapper;