# Examen 2 de Kubernettes

1. 1 namespace (donde desplegará sus worloads) y establezca en este un default request
and limits – (3 puntos)
2. 3 workloads de tipo Deployment para desplegar el frontend, el backend y la base de
datos de una aplicación cualquiera – (9 puntos)
3. Defina un resource quota de tal manera que no se puedan generar, en el namespace
definido previamente, más deployments, que los generados en el paso anterior.
Además, deberá limitar la creación de secrets, configMaps y services – (3 puntos)
4. Con la finalidad de aislar el ciclo de vida de la data del ciclo de vida del pod, el contenedor
de base de datos deberá utilizar un volumen de tipo ReadWriteOnce que se mapee
contra un path del host, para ello deberá definir un PV y un PVC – (4 puntos)
5. Implementar health checks de tipo livenessProbe y redinessProbe para el contenedor
del backend – (4 puntos)
6. 1 HPA para poder escalar dinámicamente, de acorde al consumo promedio de CPU, a
un máximo de 10 pods y un mínimo de 2 para el backend – (3 puntos)
7. 2 secretos para proteger la información sensible (credenciales de base de datos) y
referenciar estos valores tanto en pod del backend como en el de base de datos – (6
puntos)
8. 2 configMap para establecer propiedades adicionales que se puedan necesitar en el
backend y frontend – (6 puntos)
9. 3 servicios tipo clusterIP, para lograr la comunicación entre los pods desplegados en los
pasos anteriores – (6 puntos)
10. 1 ingress y 1 NGINX Ingress controller para enrutar el acceso a la aplicación de frontend
– (4 puntos)
11. Definir en el archivo config, de kubectl, un usuario que tenga permisos únicamente para
visualizar los objetos del namespace en el cual fueron desplegados los recursos de las
preguntas anteriores, para ello deberá definir un contexto, un rol y un rolebinding
adecuados – (6 puntos)
12. Se requiere que la aplicación de backend obtenga información del api-server, para ello
deberá definir un service acount y especificar un rol que obtenga únicamente la lista de
pods de todos los namespaces – (6 puntos)
