// package API;

// import java.net.URI;
// import java.net.URISyntaxException;
// import java.net.http.HttpClient;
// import java.net.http.HttpRequest;

// import java.net.http.HttpRequest.BodyPublishers;
// import java.net.http.HttpResponse.BodyHandlers;

// import com.google.gson.Gson;

// public class RestApi {
    

//     public static void main(String args []){

//         Transcript transcript = new Transcript();
//         transcript.setAudio_url("https://bit.ly/3yxKEIY");
//         Gson gson = new Gson();
//         String jsonRequest = gson.toJson(transcript);
//         System.out.println(jsonRequest);

//         HttpRequest postRequest = HttpRequest.newBuilder()
//         .uri(new URI("https://api.assemblyai.com/v2/transcript"))
//         .header("Authorization", "a1c77aeb17b8474cb4925636b9cab291")
//         .POST(BodyPublishers.ofString(jsonRequest))
//         .build();

//         HttpClient httpClient = HttpClient.newHttpClient();

//         //HttpResponse<String> postResponse = httpClient.send(postRequest, BodyHandler.ofString());
//        //HttpResponse<String> postResponse = httpClient.send(postRequest, BodyHandlers.ofString());
//        HttpResponse<String> postResponse = httpClient.send(postRequest, BodyHandlers.ofString());

//        System.out.println(postResponse.body());

//        transcript = gson.fromJson(postResponse.body(), Transcript.class);
       
//        System.out.println(transcript.getId());

//     }
// }
