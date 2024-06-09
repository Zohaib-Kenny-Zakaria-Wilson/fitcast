import java.net.http.HttpRequest;

public class Program {
    public static void main(String[] args) {
        // PLACEHOLDER FOR NOW. WILL BE USED TO MAKE API CALLS. NEEDS TO COME FROM THE
        // FRONTEND.
        final String LOCATION = "68508";
        String url = "http://api.weatherapi.com/v1/current.json?key=" + Constants.API_KEY + "&q=" + LOCATION;
        HttpRequest request = new HttpRequest.newBuilder()
                .uri(new URI(url))
    }
}