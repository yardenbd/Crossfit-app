export default function authHeader() {
    const info = JSON.parse(localStorage.getItem('info'));
  
    if (info && info.token) {
      return { "Authorization": 'Bearer ' + info.token , "Content-Type": "application/json" }; // for Spring Boot back-end
      // return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
    } else {
      return {};
    }
  }