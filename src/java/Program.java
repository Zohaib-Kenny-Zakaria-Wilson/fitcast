package src.java;

import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.URI;
import java.io.IOException;
import credentials.Constants;
// import com.google.gson.Gson;
import java.util.Map;
import java.util.Set;


public class Program {
    public static void main(String[] args) {
        // PLACEHOLDER FOR NOW. WILL BE USED TO MAKE API CALLS. NEEDS TO COME FROM THE
        // FRONTEND.
        final String LOCATION = "68508";
        String url = "http://api.weatherapi.com/v1/current.json?key=" + Constants.API_KEY.toString() + "&q=" + LOCATION;
        try {
            HttpRequest request = HttpRequest.newBuilder()
                .uri(new URI(url))
                .build();

        HttpClient client = HttpClient.newHttpClient();
        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println(response.body()); 
        // Map<String, Object> json = new Gson().fromJson(response.body(), Map.class);
        // Set<String> keys = json.keySet();
        // for (String key : keys) {
        //     System.out.print(key + ": " + json.get(key) + "----------     ");
        //     System.out.println(json.get(key));
        // }
        } catch (Exception e) {
            System.out.println("Error: " + e);
        }
    }
}