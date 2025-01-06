class ImageUploader {
    async upload(file) {
      const data = new FormData();
      data.append('file', file);
      //upload presets name : mslfnsrn -> settings > upload> Upload presets:에서 확인가능
      //Mode는 unsigned, Unique filename:true, Delivery type: upload, Access mode: public 
      data.append('upload_preset', 'unsigned');
      /*
        POST를 이용하니까 POST에 추가하는 데이터 입력하고 fetch를 이용해서 여기 우리가 URL 만들고
        POST한 거 데이터를 전송한 다음에 완료가 되면 이제 result를 받아서 result에 있는 것을 json으로
        변환해서 리턴해 줄거예요
        dfxci8qyg 폴더이름은 cloudinary.com 에서 Cloud name 으로 합니다
      */
      const result = await fetch(
        'https://api.cloudinary.com/v1_1/dpqiqj6qw/upload',
        {
          method: 'POST',
          body: data,
        }
      );
      return await result.json();
    }  
  }
  
  export default ImageUploader;