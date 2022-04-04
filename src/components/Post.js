
class Post {
 constructor(){
     this.post_show = document.getElementById('post_show');
 }

 /** 
  * show all post
 */
 
 showPosts(posts){
     let post = '';

     posts.reverse().map((data, index) => {

        let {id,name,user_photo,content,post_image} = data;
        post += `
        <div class="card my-3 shadow-sm">
                    <div class="card-body">
                      <div class="user-post-info d-flex justify-content-between">
                          <div class="user-info d-flex align-items-center">
                            <img  src="${user_photo}" alt="">
                              <h6>${name}</h6>
                          </div>
                          <div class="dropdown">
                            <button class="dropdown-toggle" type="button" id="dropdownMenuButton-${id}" data-bs-toggle="dropdown" aria-expanded="false">
                                ...
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton-${id}">
                                <li edit_id = "${id}"><a class="dropdown-item edit_post" href="#">Edit Post</a></li>
                                <li delete_id = "${id}"><a class="dropdown-item delete_post" href="#">Remove Post</a></li>
                            </ul>
                            </div>
                      </div>
                      <div class="post-content">
                          <p>${content}</p>
                          <img class="w-100" src="${post_image}" alt="">
                      </div>
                    </div>
                </div>
        
        
        `
     })

     this.post_show.innerHTML = post;
 }


}
let post = new Post;
export default post;