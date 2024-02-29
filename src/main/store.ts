import Store from "electron-store";

const store = new Store({ schema: {
    filePath: {
        type: 'string'
    }
}});

export default store;