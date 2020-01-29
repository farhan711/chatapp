const states = {
    page_details: {
        lang: 'en',
        device_data: {},
        current_page: "",
        page_title: "",
        current_sider_module:"",
        web_notification: {
            ignore: true,
            title:"",
            body: "",
        },
        loaders: {
            page_loading: false,
            page_loading_text:"" 
        },
        show_menu: false,
    },
};

export default states;