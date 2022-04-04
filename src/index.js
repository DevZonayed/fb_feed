import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './index.css';
import pimg from './img/arif.png';
import axios from 'axios';
import Post from './components/Post';
import Alert from './components/Alert';


const user_profile = document.getElementById('user_profile');
user_profile.setAttribute('src', pimg)

// get create new post element 
document.getElementById('create_post_form').addEventListener('submit', createPost)

// get msg element 
const msg = document.querySelector('.msg')


// DOM Load Operation 
document.addEventListener('DOMContentLoaded', getPosts)

// all post run 
function getPosts(){
    axios.get('http://localhost:5050/posts').then( res => Post.showPosts(res.data))
}

// create new post 
function createPost(e){
    e.preventDefault();

// get form data by FormData Object 
    let form_data = new FormData(e.target)
    let data = Object.fromEntries(form_data.entries())
    
// validation 
if ( data.name == "" || data.u_photo == "" || data.p_content == "" ){
    msg.innerHTML = Alert.danger("All Field Are Required!")
}else{
    // send post request
    axios.post('http://localhost:5050/posts', {
        name       :data.name,
        user_photo :data.u_photo,
        content    :data.p_content,
        post_image :data.p_photo,
    }).then(res => {
        getPosts();
        msg.innerHTML = Alert.success("Successsfully Post Create")
    })
}




}