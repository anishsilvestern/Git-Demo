  let imageUrl;
  
  function uploadImg() {
    const fileInput = document.getElementById('fileInput');
    const image = fileInput.files[0];

    const formData = new FormData();
    formData.append('image_file', image)
    formData.append('size', 'auto')

   
    fetch('https://api.remove.bg/v1.0/removebg', {
      method: 'POST',
      headers: {
        'X-Api-Key': "NdVfub2hoGHWxh9WAccBLCJY",
      },
      body:formData
    })
    .then((response) => {
      return response.blob();
    })
    .then((blob) => {
       const url = URL.createObjectURL(blob)
       imageUrl = url
       const imgDiv = document.getElementById('downloadImdDiv');
       const finalImg = document.createElement('img');
       finalImg.src = url
       imgDiv.appendChild(finalImg)
    })
    .catch()

  }

  function downloadImg() {
     let anchorElement = document.createElement('a');
     anchorElement.href = imageUrl;
     anchorElement.download = "BackRemover.png";
     document.body.appendChild(anchorElement)

     anchorElement.click();
     document.body.removeChild(anchorElement)


  }