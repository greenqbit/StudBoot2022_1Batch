package com.greenqbit.StudMBoot2021.utils;

import com.greenqbit.StudMBoot2021.entity.Student;

public class JDKVersionwiseFeatures {
    public void jdkwiseFeatures() {
        // ========JDK features by version =======
        //Java 8: most imp version: stream, function interface, lambda, date adn time

        //Java 11: var
        var stRam = new Student();
        //Java 17: string literal, switch with lambda
        String s = "<!DOCTYPE html>\n" +
                "<html lang=\"en\">\n" +
                "<head>\n" +
                "    <meta charset=\"UTF-8\">\n" +
                "    <title>Title</title>\n" +
                "</head>\n" +
                "<body>\n" +
                "\n" +
                "    <h2> HTML Table: first static page</h2>\n" +
                "\n" +
                "</body>\n" +
                "</html>";

        String s1 = """
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <title>Title</title>
                </head>
                <body>
                                
                    <h2> HTML Table: first static page</h2>
                                
                </body>
                </html>
                """;
    }
}
