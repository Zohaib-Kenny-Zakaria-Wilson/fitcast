import java.net.http.HttpRequest;

public class Program {
    public static void main(String[] args) {
        String url  = "http://api.weatherapi.com/v1"
        HttpRequest request = new HttpRequest.newBuilder()
            .uri(new URI(url))
            .GET()
            .build();
    }
}