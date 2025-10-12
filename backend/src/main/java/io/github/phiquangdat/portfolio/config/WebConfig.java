import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.beans.factory.annotation.Value;

import java.util.Arrays;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    // Accept a comma-separated list from application properties or environment variable.
    // If not provided or empty, we fall back to allowing all origins ("*").
    @Value("${app.cors.allowed-origins:}")
    private String allowedOriginsProperty;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        String[] allowedOrigins;

        if (allowedOriginsProperty == null || allowedOriginsProperty.trim().isEmpty()) {
            // No config provided: default to allow all origins. You can override in prod via
            // setting app.cors.allowed-origins (comma-separated) in environment variables.
            allowedOrigins = new String[]{"*"};
        } else {
            allowedOrigins = Arrays.stream(allowedOriginsProperty.split(","))
                    .map(String::trim)
                    .filter(s -> !s.isEmpty())
                    .toArray(String[]::new);
        }

        registry.addMapping("/api/**")
                .allowedOrigins(allowedOrigins)
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*");
    }

}
