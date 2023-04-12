const gLink = document.getElementById("glink");
const btn = document.getElementById("btn");
const downloadLink = document.getElementById("download-link");

btn.addEventListener("click", generateLink);

function generateLink(e) {
    e.preventDefault();

    const glinkValue = gLink.value;
    const confirmLink = gLink.value.includes("https://drive.google.com/file/d/");
    

    if(confirmLink == true) {
        const getDownloadLink = glink.value.replace("https://drive.google.com/file/d/", "https://drive.google.com/uc?export=download&id=")
        .replace("/view?usp=share_link","")

        downloadLink.value = getDownloadLink;

        function copyText(target) {
            if(target.value == "") {
                alert("Please Generate a downlolad link")
            }else {
                
                // navigator.clipboard.writeText(downloadLink.value)

                // target.select();
                // document.execCommand("copy");

                navigator.clipboard.writeText(target.value).then(() => {
                    alert("Link has been copid to clipboard")

                })
            }
        }

        const copy = document.querySelector('.copy');
        copy.addEventListener("click", () => {
            return copyText(downloadLink)
        })

        //=========== embed audio =============
        const audio1 = '<audio width="300" height="32" controls="controls" src="';
        const audio2 = '" type="audio/mp3"></audio>';
        const embedAudio = document.getElementById("embed-audio");
        embedAudio.value =`${audio1}${downloadLink.value}${audio2}`;
        // console.log(embedAudio.value);
        const copyAudio = document.querySelector(".copy-audio");
        copyAudio.addEventListener("click", () => {
            return copyText(embedAudio)
        })


        //=========== embed Video =============
        const getVideoLink = gLink.value.replace("/view?ups=sharing", "")

        const video1 = '<iframe src="';
        const video2 = '/preview width="560" height="315"></iframe>';
        const embedVideo = document.getElementById("embed-video");
        embedVideo.value =`${video1}${downloadLink.value}${video2}`;
        const copyVideo = document.querySelector(".copy-video");
        copyVideo.addEventListener("click", () => {
            return copyText(embedVideo)
        })


    }else {
        alert("Please Enter a Google Drive File Name")
    }
}