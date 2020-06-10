FROM java:8
EXPOSE 8090
VOLUME /tmp
ADD eureka-server-1.0.0.BUILD-SNAPSHOT.jar eureka-server.jar
RUN sh -c 'touch /eureka-server.jar'
ENV JAVA_OPTS=""
ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar /eureka-server.jar" ]