import axios from 'axios';

// creates an instance of axios, so if you use other API, you can customize its API defaults
const spinstance = axios.create({

});

spinstance.defaults.headers.common.Accept = 'application/json; odata=verbose';
spinstance.defaults.headers.common['Content-Type'] = 'application/json; odata=verbose';
spinstance.defaults.headers.post.Accept = 'application/json; odata=verbose';
spinstance.defaults.headers.post['Content-Type'] = 'application/json; odata=verbose';

export default spinstance;
