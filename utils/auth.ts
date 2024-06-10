import { createHmac } from 'crypto';


const UtilAuth = {
    hmacSHA256: (data, key = 'ASD*uoj-awd89esrhewuf@#TWEFVSd-', raw = true) => {
        const hash = createHmac('sha256', key).update(data).digest()
        return raw ? hash.toString('base64') : hash.toString('hex')
    },
    
};

export default UtilAuth;