const env = process.env;

//set default port to 3000
export default {
    //mongodb url
    mongodbUri: 'mongodb://127.0.0.1:27017/CRMdb',
    //define port number
    port: env.Port || 3000,
    //define host name
    host: env.HOST || '0.0.0.0',
    //server url
    get serverUrl() {
        return `http://${this.host}:${this.port}`;
    }

};