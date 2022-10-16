const APIKey = 'AIzaSyBUUt2-JaphjL2SDeJIwwnGvODiSU9rHrE';
const Userid = 'UCqU6ZDjhUJR_6MtNUmJaV3Q';
const subscriberCount= document.getElementById('subscriberCount');
const viewCount = document.getElementById('viewCount');
const videoCount = document.getElementById('videoCount');
const likesCount = document.getElementById('likesCount');


let getdata = () => {
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${Userid}&key=${APIKey}`)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data);
        subscriberCount.innerHTML = data["items"][0].statistics.subscriberCount;
        viewCount.innerHTML = data["items"][0].statistics.viewCount;
        videoCount.innerHTML = data["items"][0].statistics.videoCount;
        likesCount.innerHTML = data["items"][0].statistics.likesCount;
    })
}
getdata();