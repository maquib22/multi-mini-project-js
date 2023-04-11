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

                target.select();
                document.execCommand("copy");
                alert("Link has been copid to clipboard")
            }
        }

        const copy = document.querySelector('.copy');
        copy.addEventListener("click", () => {
            return copyText(downloadLink)
        })
    }
}