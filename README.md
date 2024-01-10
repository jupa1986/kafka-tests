# KafkaJS-test

kKafkaJS-test es una app para probar las conexiones a kafka usando [KafkaJS](https://kafka.js.org/docs/getting-started) 
creando un consumer un un producer

Nota: esta probado a ser usado con bitnami kafka en kubernetes

---

ELABORADO POR: REVISADO POR: REVISADO POR:
Puesto: Gerente de Transformación Líder de Ciberseguridad Gerente de Riesgo Integral 
Nombre Mauricio Egüez F. Emerson Chávez S. Saulo Mostajo C. 
REVISADO POR: REVISADO POR: REVISADO POR:
Puesto: 
Gerente de Operaciones Gerente de Recursos Humanos 
Gerente de Tecnología de la 
Información 
Nombre Wilfredo Chacón A. Mónica Morín C. Vladimir Wayar S. 
REVISADO POR: REVISADO POR:
Puesto: Gerente de Asesoría Legal Gerente General 
Nombre Pedro de Urioste P. Ronald Gutiérrez L. 
APROBADO POR:
Acta de Aprobación
29/12/2023
23 / 2022
N
o Acta 
TP:LLM
Versión: 1.9
POLÍTICA DE SEGURIDAD 
DE LA INFORMACIÓN
Código: 
PS-001 
Página 1 de 40 
Versión: Motivo de revisión Modificaciones realizadas 
1.9
Actualización del Documento. 
- Revisión general del documento.
- Retiro de la prestación del servicio 
administrativo compartido a la SCG y las 
EFIG’s.
(Acta de Aprobación Nº 23 / 2023)
Fecha: 
29/12/2023
Cualquier documento impreso diferente del original y cualquier archivo electrónico que se encuentre fuera de la Intranet del 
Banco Ganadero S.A., será considerada COPIA NO CONTROLADA.
Versión: 1.9
POLÍTICA DE SEGURIDAD 
DE LA INFORMACIÓN 
Código:
PS - 001 
Página 2 de 42
CONTENIDO
INTRODUCCIÓN............................................................................................................................................... 5
Seguridad de la Información...........................................................................................................5
Estrategia de la Seguridad de la Información.................................................................................5
Objetivo del documento ..................................................................................................................6
Alcance ...........................................................................................................................................6
Aprobación y Publicación del Documento ......................................................................................7
Aspectos Generales........................................................................................................................7
SECCIÓN I. ORGANIZACIÓN DE LA SEGURIDAD DE LA INFORMACIÓN.................................................... 8
1.- Objetivo......................................................................................................................................8
2.- Organización Interna .................................................................................................................8
3.- Partes Externas .........................................................................................................................9
SECCIÓN II. GESTIÓN DE ACTIVOS............................................................................................................. 10
1.- Objetivo....................................................................................................................................10
2.- Responsabilidad por los Activos..............................................................................................10
3.- Clasificación de la Información................................................................................................10
SECCIÓN III. GESTIÓN DE RIESGOS DE SEGURIDAD DE LA INFORMACION ......................................... 11
1.- Objetivo....................................................................................................................................11
SECCIÓN IV. SEGURIDAD DE RECURSOS HUMANOS .............................................................................. 11
1.- Objetivo....................................................................................................................................11
2.- Antes del Empleo.....................................................................................................................12
3.- Durante el Empleo...................................................................................................................12
4.- Desvinculación o Cambio de Puesto.......................................................................................13
SECCIÓN V. PROTECCIÓN FÍSICA Y AMBIENTAL ...................................................................................... 13
1.- Objetivo....................................................................................................................................13
2.- Áreas Protegidas .....................................................................................................................13
3.- Seguridad del Equipamiento Tecnológico...............................................................................14
SECCIÓN VI. GESTIÓN DE COMUNICACIONES Y PROCESAMIENTO DE INFORMACIÓN...................... 15
1.- Objetivo....................................................................................................................................15
2.- Procedimientos y Responsabilidades Operativas ...................................................................15
3.- Gestión en la Entrega de Servicio por parte de Terceros .......................................................15
4.- Planeación y Aprobación del Sistema.....................................................................................16
5.- Protección Contra Código Malicioso y Código Móvil...............................................................16
Cualquier documento impreso diferente del original y cualquier archivo electrónico que se encuentre fuera de la Intranet del 
Banco Ganadero S.A., será considerada COPIA NO CONTROLADA.
Versión: 1.9
POLÍTICA DE SEGURIDAD 
DE LA INFORMACIÓN 
Código:
PS - 001 
Página 3 de 42
6.- Administración de Respaldos (Back-Ups)...............................................................................16
7.- Gestión de Seguridad en Redes .............................................................................................17
8.- Gestión de Medios de Información..........................................................................................17
9.- Intercambio de Información .....................................................................................................17
10.- Servicios de Banca Electrónica .............................................................................................18
13.- Seguimiento y Control ...........................................................................................................20
SECCIÓN VII. CONTROL DE ACCESOS ....................................................................................................... 21
1.- Objetivo....................................................................................................................................21
2.- Requerimientos para el Control de Acceso.............................................................................21
3.- Administración de Accesos de Usuarios .................................................................................21
4.- Responsabilidad del usuario ...................................................................................................22
5.- Control de Acceso a Redes.....................................................................................................23
6.- Control de Acceso al Sistema Operativo.................................................................................23
7.- Control de Acceso a las Aplicaciones y a la Información........................................................24
8.- Computación Móvil, Comunicaciones virtuales y Tele-trabajo................................................25
SECCIÓN VIII. ADQUISICIÓN, DESARROLLO Y MANTENIMIENTO DE SISTEMAS DE INFORMACIÓN .. 26
1.- Objetivo....................................................................................................................................26
2.- Requerimientos de Seguridad de los Sistemas de Información .............................................26
3.- Procesamiento Correcto en las Aplicaciones..........................................................................27
4.- Controles Criptográficos ..........................................................................................................27
5.- Seguridad de los Archivos del Sistema...................................................................................28
6.- Seguridad en los Procesos de Desarrollo y Soporte...............................................................29
7.- Gestión de las Vulnerabilidades Técnicas ..............................................................................30
SECCION IX. GESTIÓN DE INCIDENTES DE SEGURIDAD DE LA INFORMACIÓN........................... 30
1.- Objetivo....................................................................................................................................30
2.- Reporte de Eventos y Debilidades en la Seguridad de la Información ...................................30
3.- Gestión de Incidentes y Mejoras en Seguridad de la Información..........................................31
SECCIÓN X. GESTIÓN DE LA CONTINUIDAD DEL NEGOCIO............................................................... 32
1.- Objetivo....................................................................................................................................32
2.- Aspectos de la Seguridad de la Información en la Gestión de la Continuidad del BANCO....32
SECCIÓN XI. COMPUTACIÓN EN LA NUBE ........................................................................................ 33
1.- Objetivo....................................................................................................................................33
Cualquier documento impreso diferente del original y cualquier archivo electrónico que se encuentre fuera de la Intranet del 
Banco Ganadero S.A., será considerada COPIA NO CONTROLADA.
Versión: 1.9
POLÍTICA DE SEGURIDAD 
DE LA INFORMACIÓN 
Código:
PS - 001 
Página 4 de 42
2.- Aspectos de la Seguridad de la Información en la Gestión de Servicios en la Nube. ............34
El Banco contará con una Norma especificando los lineamientos de seguridad para la protección 
de datos en la nube. .....................................................................................................................34
También debe seguir los siguientes puntos. ................................................................................34
SECCIÓN XII. CUMPLIMIENTO .............................................................................................................. 34
1.- Objetivo....................................................................................................................................34
2.- Responsabilidades ..................................................................................................................34
3.- Cumplimiento con Requerimientos Legales............................................................................35
4.- Cumplimiento Técnico .............................................................................................................38
5.- Consideraciones para Auditorías de Sistemas de Información ..............................................39
SECCIÓN XIII. CONTROL DE EDICIONES ............................................................................................. 40
Cualquier documento impreso diferente del original y cualquier archivo electrónico que se encuentre fuera de la Intranet del 
Banco Ganadero S.A., será considerada COPIA NO CONTROLADA.
Versión: 1.9
POLÍTICA DE SEGURIDAD 
DE LA INFORMACIÓN 
Código:
PS - 001 
Página 5 de 42
INTRODUCCIÓN 
La información se ha convertido en un componente indispensable de la conducción del negocio para 
todas las organizaciones. En ese sentido, es necesario establecer y mantener un marco de referencia 
del gobierno de la seguridad de la información y dar apoyo a los procesos para asegurar que la 
estrategia de seguridad de la información esté alineada con las metas y los objetivos del negocio de 
igual manera sea parte de la estrategia de Tecnología de la Información, como también las directrices 
establecidas por la Sociedad Controladora Ganadero.
Seguridad de la Información 
La Seguridad de la Información existe en una organización para apoyar el logro de sus objetivos, 
minimizar las interrupciones a las operaciones y gestionar de manera eficiente los riesgos a los que 
se expone bajo un conjunto de medidas y recursos destinados a resguardar y proteger la información, 
así como los activos de información, buscando mantener la confidencialidad, confiabilidad, 
disponibilidad e integridad de la misma.
La seguridad de la información se entiende como la preservación de las siguientes características: 
1. Confidencialidad: se garantiza que la información sea accesible sólo a aquellas personas 
autorizadas a tener acceso a la misma. 
2. Integridad: se salvaguarda la exactitud y totalidad de la información y los métodos de 
procesamiento. 
3. Disponibilidad: se garantiza que los usuarios autorizados tengan acceso a la información y 
a los recursos relacionados con la misma, toda vez que lo requieran. 
Con el objeto de conseguir la protección adecuada para el funcionamiento del Banco Ganadero S.A 
(en adelante denominado “BANCO”), se contará con estándares de seguridad que contemplen las 
medidas, tanto técnicas como administrativas, que permitan la creación de un entorno seguro para 
las personas, datos, información, aplicaciones, equipos y sistemas. 
La complejidad, relevancia y criticidad de la seguridad de la información y su gobierno exigen que sea 
tratada y apoyada por los niveles más altos del BANCO. 
El presente documento está alineado a las Políticas Generales del BANCO y al estándar del Sistema 
de Gestión de Seguridad de la Información (SGSI) – Norma Boliviana ISO/IEC 27001 aprobada por 
el Concejo Nacional de Normas CONNOR de IBNORCA en fecha 12 de marzo 2014, proporcionando 
un marco ampliamente aceptado a nivel internacional y un enfoque de la gestión modelo para la 
seguridad de la información. 
Estrategia de la Seguridad de la Información 
La seguridad de la información es efectiva en la medida que evita o minimiza la materialización del 
riesgo, por tanto, se adopta una estrategia de protección por capas y defensa en profundidad basadas 
en la prevención del riesgo estableciendo controles proactivos. 
Cualquier documento impreso diferente del original y cualquier archivo electrónico que se encuentre fuera de la Intranet del 
Banco Ganadero S.A., será considerada COPIA NO CONTROLADA.
Versión: 1.9
POLÍTICA DE SEGURIDAD 
DE LA INFORMACIÓN 
Código:
PS - 001 
Página 6 de 42
Figura 1: Estrategia de Seguridad por capas
Bajo este enfoque se establecen niveles que podrían tener debilidades intrínsecas pero la 
probabilidad de que TODAS puedan fallar coincidiendo en tiempo y espacio será mínima. Como 
parte de la estrategia de seguridad también se establecen los siguientes principios: 
• Menor privilegio – Por defecto la información entregada es la mínima necesaria para realizar 
las actividades de acuerdo a las funciones establecidas. 
• Segregación de funciones – En lo posible se evitará la concentración de funciones que no 
privilegien la opción de intereses. 
• Hecho y revisado – toda tarea debe ser revisada según su sensibilidad. 
• Enfoque Predictivo: la seguridad será más efectiva en la medida que prevé desviaciones y 
actué antes de su degradación.
Objetivo del documento 
Proporcionar dirección gerencial y apoyo a la seguridad de la información en concordancia con los 
requerimientos de negocio, legislación nacional y regulaciones vigentes. 
Alcance 
Esta Política se aplica en todo el ámbito del BANCO, a sus recursos y a la totalidad de los procesos, 
ya sean internos o externos vinculados a la entidad a través de contratos o acuerdos con terceros. 
Cualquier documento impreso diferente del original y cualquier archivo electrónico que se encuentre fuera de la Intranet del 
Banco Ganadero S.A., será considerada COPIA NO CONTROLADA.
Versión: 1.9
POLÍTICA DE SEGURIDAD 
DE LA INFORMACIÓN 
Código:
PS - 001 
Página 7 de 42
Imagen 1. Ubicación de la Política de Seguridad de la Información en la Pirámide Documental de SI 
Aprobación y Publicación del Documento 
El Directorio deberá aprobar el documento de política de seguridad de información y autorizar sus 
modificaciones. Es deber de la Gerencia General instruir la publicación y comunicación de este 
documento a todos los empleados del BANCO y entidades externas pertinentes, el Líder de 
Ciberseguridad deberá mantener y revisar la Política de Seguridad de la Información del Banco y 
proponer su actualización.
Se realizará la revisión de la política de seguridad de la información al menos una vez al año y luego 
de cambios significativos en los controles, tecnología, impactos u otros relacionados a incidentes de 
seguridad para garantizar la continua idoneidad, eficiencia y efectividad. Los resultados de la revisión 
deberán reflejar los cambios que afecten a la valoración inicial de los riesgos.
Aspectos Generales 
Esta Política se conforma de una serie de pautas sobre aspectos específicos de la Seguridad de la 
Información, que incluyen los siguientes tópicos: 
a. Organización de la Seguridad: Orientado a administrar la seguridad de la información dentro 
del BANCO y establecer un marco gerencial para controlar su implementación.
b. Clasificación y Control de Activos: Destinado a mantener una adecuada protección de los 
activos del BANCO.
c. Seguridad de Recursos Humanos: Orientado a reducir los riesgos de error humano, 
comisión de ilícitos contra el BANCO o uso inadecuado de instalaciones.
d. Protección Física y Ambiental: Destinado a impedir accesos no autorizados, daños e 
interferencia a las redes e información del BANCO.
Cualquier documento impreso diferente del original y cualquier archivo electrónico que se encuentre fuera de la Intranet del 
Banco Ganadero S.A., será considerada COPIA NO CONTROLADA.
Versión: 1.9
POLÍTICA DE SEGURIDAD 
DE LA INFORMACIÓN 
Código:
PS - 001 
Página 8 de 42
e. Gestión de las Comunicaciones y las Operaciones: Dirigido a garantizar el funcionamiento 
correcto y seguro de las instalaciones de procesamiento de la información y medios de 
comunicación.
f. Control de Acceso: Orientado a controlar el acceso lógico a la información (identificación, 
autenticación y autorización)
g. Desarrollo y Mantenimiento de los Sistemas: Orientado a garantizar la incorporación de 
medidas de seguridad en los sistemas de información desde su desarrollo y/o implementación 
y durante su mantenimiento.
h. Gestión de Incidentes de Seguridad de la Información: Orientado a la contención y 
respuesta ante eventos de seguridad relacionados a los sistemas que podrían tener un efecto 
significativo adverso para el BANCO.
i. Gestión de la Continuidad del Negocio: Orientado a contrarrestar las interrupciones de las 
actividades y proteger los procesos críticos de los efectos de fallas significativas o desastres.
j. Computación en la nube (Cloud Computing): Orientado a Garantizar la seguridad de la 
información a través de una red (Internet), a un conjunto compartido de recursos informáticos 
o computacionales (redes, servidores, almacenamiento, aplicaciones o servicios).
k. Cumplimiento: Destinado a impedir infracciones y violaciones de las leyes del derecho civil 
y penal; de las obligaciones establecidas por leyes, instrucciones del ente regulador, normas, 
reglamentos o contratos; y de los requisitos de seguridad.
l. Sanciones por Incumplimiento: El incumplimiento de la Política de Seguridad de la 
Información tendrá como resultado la aplicación de sanciones descritas en el Reglamento 
Interno del Banco.
m. BYOD (Bring Your Own Device): BYOD, por sus siglas en Ingles Bring Your Own Device 
cuya traducción es: trae tu propio dispositivo.
SECCIÓN I. ORGANIZACIÓN DE LA SEGURIDAD DE LA INFORMACIÓN 
1.- Objetivo 
El Banco gestionará la Seguridad de la Información dentro la institución y proveerá adecuada 
seguridad a los accesos de terceros. 
2.- Organización Interna 
a. Compromiso de la Gerencia con la Seguridad de la Información: La dirección brindará 
soporte activo a la seguridad dentro del BANCO a través de una directiva clara, compromiso 
demostrado, asignación explicita, y conocimientos de responsabilidades de seguridad de la 
Información. 
Cualquier documento impreso diferente del original y cualquier archivo electrónico que se encuentre fuera de la Intranet del 
Banco Ganadero S.A., será considerada COPIA NO CONTROLADA.
Versión: 1.9
POLÍTICA DE SEGURIDAD 
DE LA INFORMACIÓN 
Código:
PS - 001 
Página 9 de 42
b. Coordinación de la Seguridad de la Información: La seguridad de la información es 
responsabilidad de todos, por lo cual, sus actividades serán coordinadas por representantes 
de las diferentes áreas del BANCO con los roles y funciones de trabajo correspondientes. 
Para tal efecto se deberá implementar en un Comité las actividades de Seguridad de la 
Información. 
c. Asignación de Responsabilidades de Seguridad de la Información: La Política de 
Seguridad de la Información es de aplicación obligatoria para todo el personal del BANCO, 
cualquiera sea su situación laboral, el área a la cual se encuentre realizando sus funciones y 
cualquiera sea el nivel de las tareas que desempeñe. 
d. Proceso de Autorización para las Instalaciones de Procesamiento de Información: Se 
establecerá e implementará un proceso para autorizar nuevas instalaciones de procesamiento 
de la información. 
e. Acuerdos de Confidencialidad: Se identificarán y verificarán los requerimientos para la 
confidencialidad, reflejando las necesidades del BANCO para la protección de información. 
f. Contacto con Autoridades: Se tendrán registros de contactos con autoridades pertinentes, 
para informar en casos de incidentes de seguridad. 
g. Contactos con Grupos de Interés Especial: A efectos de intercambiar experiencias y 
obtener asesoramiento para el mejoramiento de las prácticas y controles de seguridad, se 
mantendrán contactos con grupos de interés especial u otras asociaciones de profesionales 
y foros de especialistas en seguridad. 
h. Revisión Independiente de la Seguridad de la Información: La dirección realizará 
revisiones independientes y periódicas sobre la vigencia e implementación de la Política de 
Seguridad de la Información, controles, procesos y procedimientos relacionados, a efectos de 
garantizar que las prácticas del BANCO reflejan adecuadamente sus disposiciones.
3.- Partes Externas 
Se mantendrá la seguridad de la información del BANCO y las instalaciones de procesamiento de 
información que son accedidas, procesadas, comunicadas o gestionadas por partes externas. 
a. Identificación de riesgos relacionados con las partes externas: Los riesgos de los 
recursos de tratamiento de la información y los activos de información del BANCO que 
involucran partes externas, serán identificados a fin de implementar controles apropiados 
antes de conceder el acceso incluyendo buenas prácticas de interconexión para terceros, de 
acuerdo a la NIST SP 800-47 (instituto Internacional de Estándares y Tecnología) u otros que 
se considere necesario. 
b. Asignación de seguridad cuando se trata con clientes: Se aclararán todos los 
requerimientos de seguridad de la información identificados, antes de otorgar, a los clientes, 
acceso a los sistemas de información o servicios del BANCO. 
c. Asignación de la Seguridad en Acuerdos con Terceras Partes: Los contratos con terceras 
partes que involucren el acceso, procesamiento, comunicación o gestión de la información 
Cualquier documento impreso diferente del original y cualquier archivo electrónico que se encuentre fuera de la Intranet del 
Banco Ganadero S.A., será considerada COPIA NO CONTROLADA.
Versión: 1.9
POLÍTICA DE SEGURIDAD 
DE LA INFORMACIÓN 
Código:
PS - 001 
Página 10 de 42
del BANCO o de las instalaciones de procesamiento de la información, deberán establecer el 
cumplimiento de las Políticas y Normas de Seguridad del Banco. 
SECCIÓN II. GESTIÓN DE ACTIVOS 
1.- Objetivo 
Garantizar que los activos de información del BANCO reciban un nivel apropiado de protección. 
2.- Responsabilidad por los Activos 
El BANCO asignará “propietarios” y “custodios” de los activos de información, quienes serán los 
responsables de mantener una protección adecuada. 
a. Propiedad de los Activos de Información: Todos los recursos de tratamiento de la 
información y los activos de información del BANCO deberán ser de propiedad de una parte 
o área designada. 
b. Custodia de los Activos de Información: Todos los funcionarios del BANCO (internos o 
tercerizados) son responsables por la custodia de información impresa o digital que se le fue 
asignada.
c. Inventarios de Activos: El BANCO en todo momento deberá tener un cabal conocimiento 
sobre los activos que posee como parte importante de la administración de riesgos. 
d. Uso Aceptable de los Activos: El BANCO identificará, documentará e implementará las 
normas para el uso aceptable de los recursos y activos de información.
3.- Clasificación de la Información 
El BANCO por medio de todas sus áreas clasificará la información de acuerdo con su grado de 
sensibilidad y criticidad, documentando y manteniendo actualizada dicha clasificación, permitiendo 
identificar la información y su valoración correspondiente.
a. Lineamientos de Clasificación: La información deberá clasificarse en términos de su valor, 
requerimientos legales, sensibilidad, y criticidad para el BANCO. 
Para clasificar un Activo de Información, se evaluarán las tres características de la 
información en las cuales se basa la seguridad: confidencialidad, integridad y disponibilidad.
Se establecerán criterios de clasificación de la información como ser el nivel de sensibilidad, 
tipificación y formato.
Se implementarán procedimientos específicos para la gestión de la Clasificación de la 
Información.
b. Etiquetado de la Información: Como parte de la mejora continua de la gestión de
Clasificación de la Información y al contar con un proceso definido, se implementarán 
mecanismos de etiquetado de acuerdo al esquema de clasificación establecido.
Cualquier documento impreso diferente del original y cualquier archivo electrónico que se encuentre fuera de la Intranet del 
Banco Ganadero S.A., será considerada COPIA NO CONTROLADA.
Versión: 1.9
POLÍTICA DE SEGURIDAD 
DE LA INFORMACIÓN 
Código:
PS - 001 
Página 11 de 42
c. Responsabilidades: Las gerencias de área deben aprobar el listado de clasificación de la 
información correspondiente a sus áreas, aceptando ser el propietario y dueño de la 
información. Asimismo, es el responsable de definir medidas de seguridad en la información 
de acuerdo a su nivel de sensibilidad.
El área de Ciberseguridad gestionará la actualización de la clasificación de la información para 
cada gestión, guiando y asesorando a los propietarios de la información.
Se determinarán las responsabilidades con respecto a los cargos involucrados en la gestión 
de la Clasificación de la Información.
SECCIÓN III. GESTIÓN DE RIESGOS DE SEGURIDAD DE LA INFORMACION 
1.- Objetivo 
Identificar, evaluar y reducir continuamente los riesgos relacionados con Seguridad de la Información 
dentro de los niveles de tolerancia establecidos.
2.- Lineamientos de la Gestión de riesgos
Se debe establecer una metodología propia con un enfoque sistemático para la gestión de Riesgos 
de Seguridad de la Información que se encuentre alineado a las metodologías de Gestión de Riesgo 
Integral del Banco e incluyendo normas y mejores prácticas para la gestión de Riesgos de Seguridad 
de la Información.
La gestión de Riesgos de Seguridad de la Información es un proceso continuo que anualmente debe 
mantenerse actualizado por la instancia de Ciberseguridad y debe ser comunicada al Comité 
correspondiente de Seguridad.
3.- Responsabilidades
El departamento de Ciberseguridad comunicará los riesgos identificados, su nivel de criticidad e 
impacto a los dueños de los procesos involucrados.
Es responsabilidad de los dueños de los procesos, definir planes de acción que permitan mitigar los 
riesgos identificados bajo un tiempo razonable en base a su nivel de riesgo.
SECCIÓN IV. SEGURIDAD DE RECURSOS HUMANOS 
1.- Objetivo
Reducir los riesgos de error humano, comisión de ilícitos, uso inadecuado de instalaciones, recursos 
y manejo no autorizado de la información, estableciendo compromisos de confidencialidad con todo 
el personal y usuarios externos de las instalaciones de procesamiento de información.
Cualquier documento impreso diferente del original y cualquier archivo electrónico que se encuentre fuera de la Intranet del 
Banco Ganadero S.A., será considerada COPIA NO CONTROLADA.
Versión: 1.9
POLÍTICA DE SEGURIDAD 
DE LA INFORMACIÓN 
Código:
PS - 001 
Página 12 de 42
2.- Antes del Empleo 
a. Roles y Responsabilidades: Las funciones y responsabilidades en materia de seguridad 
serán incorporadas en la descripción de las responsabilidades de los puestos de trabajo. 
Éstas incluirán las responsabilidades generales relacionadas con la implementación y el 
mantenimiento de la Política de Seguridad de la Información, y las responsabilidades 
específicas vinculadas a la protección de cada uno de los activos, o la ejecución de procesos 
o actividades de seguridad determinadas. 
b. Selección de Personal: Se llevarán a cabo controles de verificación del personal en el 
momento en que se solicita el puesto. 
c. Términos y condiciones de empleo: Los términos y condiciones de empleo establecerán la 
responsabilidad del empleado en materia de seguridad de la información.
Cuando corresponda, los términos y condiciones de empleo establecerán que estas 
responsabilidades se extienden más allá de los límites de la sede del BANCO y del horario 
normal de trabajo. 
Los derechos y obligaciones del empleado relativos a la seguridad de la información, 
incluirán términos de Propiedad Intelectual y Acuerdos de Confidencialidad, como 
condiciones del empleo. 
d. Compromiso de Confidencialidad: Como parte de sus términos y condiciones iniciales de 
empleo, los empleados, cualquiera sea su situación de contrato, deberán firmar un 
Compromiso/Acuerdo de Confidencialidad o no divulgación, que indique el mantenimiento de 
la confidencialidad de la información a la que tenga acceso, inclusive después de la 
finalización de la relación contractual, en lo que respecta al tratamiento de la información del 
BANCO.
e. Personal fuera del territorio nacional: Las Gerencias que consideren la contratación de 
personal que se encuentra fuera del territorio nacional bajo una modalidad de trabajo remoto,
debe comunicar a la Gerencia de Riesgos para su análisis de riesgos y posterior comunicación 
al Comité de Seguridad del Banco.
Se llevarán a cabo controles de verificación del personal fuera del territorio nacional y se 
establecerán contratos dedicados que puedan mitigar riesgos que expongan la confidencialidad, 
integridad y disponibilidad de la Información del Banco. 
3.- Durante el Empleo 
a. Responsabilidades de la Dirección: La dirección asegurará que los funcionarios internos, 
terciarizados y contratistas estén conscientes de sus responsabilidades, de tal manera que 
sus roles sean ejecutados adecuadamente. Además, deberá conocer las políticas 
establecidas y aplicarlas.
b. Capacitación, Educación y Entrenamiento en Seguridad de la Información: Todos los 
empleados del BANCO, los usuarios externos y los terceros que desempeñen funciones en 
el BANCO, deberán ser capacitados en materia de la política, normas y procedimientos del 
BANCO. Esto comprende los requerimientos de seguridad y las responsabilidades legales, 
así como la capacitación referida al uso correcto de las instalaciones de procesamiento de 
Cualquier documento impreso diferente del original y cualquier archivo electrónico que se encuentre fuera de la Intranet del 
Banco Ganadero S.A., será considerada COPIA NO CONTROLADA.
Versión: 1.9
POLÍTICA DE SEGURIDAD 
DE LA INFORMACIÓN 
Código:
PS - 001 
Página 13 de 42
información y el uso correcto de los recursos en general, como por ejemplo su estación de 
trabajo.
c. Proceso Disciplinario: Se seguirá el proceso disciplinario formal contemplando el Código de 
Ética del Banco Ganadero S.A., Ley General de Trabajo y las establecidas por el ente 
regulador ASFI para los empleados que generen incidentes de seguridad o violen la Política, 
Normas y Procedimientos de Seguridad del BANCO.
4.- Desvinculación o Cambio de Puesto
El BANCO manejará de manera ordenada la terminación o cambio de empleo, incluyendo el retiro de 
los derechos de acceso, retorno de equipos y finalización con las responsabilidades respectivas. 
a. Responsabilidades de la finalización: Se establecerá claramente las responsabilidades que 
se extienden más allá del periodo de contrato. 
b. Retorno de Activos: El proceso de terminación de la relación laboral deberá incluir el retorno 
formal de todo el software asignado, dispositivos (Token, tarjetas de acceso, etc), documentos 
de la entidad y equipo (Computador completo).
c. Cancelación de Derechos de Acceso: Se cancelará de inmediato el acceso para cualquier 
usuario cesante en los sistemas internos o externos que maneja el Banco.
SECCIÓN V. PROTECCIÓN FÍSICA Y AMBIENTAL 
1.- Objetivo 
Prevenir e impedir accesos no autorizados, hurtos, daños e interferencia a las sedes, instalaciones e 
información del BANCO. 
2.- Áreas Protegidas 
Se definirán niveles de acceso físico para el personal del BANCO a las áreas restringidas, dicha 
asignación deberá efectuarse en base a un análisis de riesgos. 
Los recursos importantes para el tratamiento de la información deberán ser ubicados en “áreas 
protegidas” de tal manera que se prevenga el acceso no autorizado. 
a. Perímetro de Seguridad Física: El BANCO utilizará perímetros de seguridad para proteger 
las áreas que contienen instalaciones de procesamiento de información, de suministro de 
energía eléctrica, y cualquier otra área considerada crítica para el correcto funcionamiento de 
los sistemas de información.
b. Controles de Acceso Físicos: Las áreas protegidas se resguardarán mediante el empleo de 
controles de acceso físico, permitiendo el acceso sólo al personal autorizado. 
c. Seguridad de Oficinas, Recintos e Instalaciones: Para la selección y el diseño de un área 
protegida se tendrá en cuenta la posibilidad de daño producido por incendio, inundación, 
explosión, agitación civil, y otras formas de desastres naturales o provocados por el hombre. 
También se tomarán en cuenta las disposiciones y normas (estándares) en materia de 
Cualquier documento impreso diferente del original y cualquier archivo electrónico que se encuentre fuera de la Intranet del 
Banco Ganadero S.A., será considerada COPIA NO CONTROLADA.
Versión: 1.9
POLÍTICA DE SEGURIDAD 
DE LA INFORMACIÓN 
Código:
PS - 001 
Página 14 de 42
sanidad y seguridad. Asimismo, se considerarán las amenazas a la seguridad que 
representan los edificios y zonas aledañas. 
d. Protección Contra Amenazas Externas y Ambientales: Se diseñará y aplicará la 
protección física contra fuego, inundaciones, terremotos, explosiones, y otras formas 
naturales o desastres hechas por el hombre. 
Las instalaciones estarán iluminadas de manera suficiente y apropiada, los lugares de trabajo 
tendrán, dentro de lo posible, luz natural, manteniendo la temperatura más agradable y 
estable que permitan las circunstancias, además de estar instalados de tal manera que no se 
produzca ningún efecto nocivo para la salud.
e. Trabajo en Áreas Protegidas: Para incrementar la seguridad de las áreas protegidas, se 
establecerán controles y lineamientos adicionales para el personal que trabaja en estas áreas, 
así como para las actividades de terceros que tengan lugar allí.
3.- Seguridad del Equipamiento Tecnológico 
Se definirán las medidas de seguridad física y ambiental para el resguardo de los activos críticos, en 
función a un análisis de riesgos, controlando su implementación. 
a. Ubicación y Protección de la Sala de Equipos: Las salas de equipos tecnológicos de todas 
las oficinas del BANCO deberán estar ubicadas y protegidas de tal manera que se reduzcan 
los riesgos ocasionados por amenazas, peligros ambientales, y las oportunidades de acceso 
no autorizado, el ambiente físico en el que se encuentran instalados los equipos de seguridad, 
procesamiento de datos y telecomunicaciones deben ser de uso exclusivo para este fin, no 
debiendo almacenar papel u otros suministros inflamables, alimentos o equipos en desuso.
b. Elementos de Soporte: Los servicios como electricidad, calefacción/ventilación, gas extintor, 
aire acondicionado, entre otros, no serán susceptibles a ocasionar daños a los equipos que 
soportan. Estos elementos de apoyo serán regularmente inspeccionados y sometidos a 
pruebas para asegurar su funcionamiento apropiado y para reducir algún riesgo. 
✓ Suministro Eléctrico: La sala de equipos estará protegida con respecto a las posibles 
fallas en el suministro de energía u otras anomalías eléctricas. El suministro de energía 
estará de acuerdo con las especificaciones del fabricante o proveedor de cada equipo. 
Se proveerá iluminación de emergencia en caso de producirse una falla en el suministro 
principal de energía. 
c. Seguridad en el Cableado: El cableado de energía eléctrica y de comunicaciones que 
transporta datos o brinda apoyo a los servicios de información estará protegido contra 
intercepción o daño físico. 
d. Mantenimiento del Equipamiento: Se realizará el mantenimiento del equipamiento para 
asegurar su disponibilidad e integridad permanente.
e. Seguridad del Equipamiento Fuera del Ámbito del Banco: El uso de equipamiento 
destinado al procesamiento de información fuera del ámbito del BANCO, deberá cumplir con 
los procedimientos para retiro de activos y normas para el cuidado de los mismos fuera de las 
instalaciones del Banco.
Cualquier documento impreso diferente del original y cualquier archivo electrónico que se encuentre fuera de la Intranet del 
Banco Ganadero S.A., será considerada COPIA NO CONTROLADA.
Versión: 1.9
POLÍTICA DE SEGURIDAD 
DE LA INFORMACIÓN 
Código:
PS - 001 
Página 15 de 42
f. Eliminación Segura o Reutilización del Equipamiento: Los medios de almacenamiento 
que contienen material sensible y en desuso (que no vaya a ser requerido por instancias 
legales o regulatorias), como ser: discos rígidos, CDs, cintas y similares, serán físicamente 
destruidos o sometidos a procesos de borrado seguro según corresponda.
g. Traslado y Retiro de Activos de Información: El equipamiento, la información y el software 
no deberán ser retirados de las instalaciones del BANCO sin autorización formal.
SECCIÓN VI. GESTIÓN DE COMUNICACIONES Y PROCESAMIENTO DE 
INFORMACIÓN 
1.- Objetivo 
Garantizar el funcionamiento correcto y seguro de las instalaciones de procesamiento de la 
información y comunicaciones del BANCO.
2.- Procedimientos y Responsabilidades Operativas 
a. Documentación de Procedimientos Operativos: Se documentarán y mantendrán 
actualizados los procedimientos operativos de Tecnología de la Información, y sus cambios 
serán revisados por el departamento de Ciberseguridad a fin de mitigar riesgos relacionados 
con la integridad, disponibilidad y confidencialidad de la información.
b. Gestión de Cambios en Producción: Se definirán procedimientos para el control de todos 
los cambios en el ambiente operativo y de comunicaciones. Todo cambio será evaluado 
previamente en aspectos técnicos y de seguridad. 
c. Segregación de Funciones: Se mantendrá separada la gestión o ejecución de ciertas tareas 
o áreas de responsabilidad, a fin de reducir el riesgo de modificaciones no autorizadas o mal 
uso de la información o los servicios por falta de independencia en la ejecución de funciones 
críticas.
d. Separación de los Ambientes de Desarrollo y Producción: Se mantendrán separados los 
ambientes de desarrollo, prueba y producción de los sistemas del BANCO, estableciendo 
procedimientos que aseguren la calidad de los procesos que se implementen en el ámbito 
operativo. Asimismo, se documentarán las reglas para la transferencia de software desde el 
estado de desarrollo hacia el estado “producción” a fin de minimizar los riesgos de incidentes 
producidos por la manipulación de información operativa. 
3.- Gestión en la Entrega de Servicio por parte de Terceros 
Se evaluarán los contratos y acuerdos con terceros para garantizar la incorporación de 
consideraciones relativas a la seguridad de la información involucrada en la gestión de los productos 
o servicios prestados
a. Entrega del Servicio: En los casos de tercerizar la administración de las instalaciones de 
procesamiento, se acordarán controles con el proveedor del servicio y se incluirán en el 
contrato las responsabilidades correspondientes. 
Cualquier documento impreso diferente del original y cualquier archivo electrónico que se encuentre fuera de la Intranet del 
Banco Ganadero S.A., será considerada COPIA NO CONTROLADA.
Versión: 1.9
POLÍTICA DE SEGURIDAD 
DE LA INFORMACIÓN 
Código:
PS - 001 
Página 16 de 42
b. Monitoreo y Revisión de los Servicios de Terceros: El monitoreo deberá asegurar que los 
términos de seguridad de la información y condiciones de los acuerdos estén siendo 
cumplidos, esta monitorización será realizada tomando en cuenta los niveles de desempeño 
del servicio para verificar el cumplimiento de los acuerdos. 
4.- Planeación y Aprobación del Sistema 
a. Gestión de Capacidad: Se efectuará el monitoreo de las necesidades de capacidad de los 
sistemas en producción y proyectar las futuras demandas, a fin de garantizar un 
procesamiento y almacenamiento adecuados. Para ello, se tomará en cuenta además los 
nuevos requerimientos de los sistemas, así como las tendencias actuales y proyectadas en 
el procesamiento de la información del BANCO para el período estipulado de vida útil de cada 
componente. 
b. Aceptación del Sistema: El Gerente de Tecnología de la Información y el Líder de 
Ciberseguridad sugerirán criterios de aprobación para nuevos sistemas de información, 
actualizaciones y nuevas versiones, solicitando la realización de las pruebas necesarias antes 
de su aprobación definitiva. 
5.- Protección Contra Código Malicioso y Código Móvil 
a. Controles Contra Software Malicioso: Se implementarán controles para detención, 
prevención y recuperación contra todo tipo de software malicioso. 
b. Controles Contra Códigos Móviles: Se establecerán controles para restringir el código 
móvil en los computadores de los usuarios. 
6.- Administración de Respaldos (Back-Ups) 
a. Respaldo de la Información: Se determinarán los requerimientos para resguardar cada 
software o dato en función de su criticidad, necesarios para el continuo funcionamiento del 
negocio. En base a ello, se definirá y documentará un esquema de resguardo de la 
información.
Para la administración de los respaldos el Banco deberá considerar los siguientes aspectos:
• Los sistemas de resguardo serán evaluados periódicamente, asegurándose que los 
mismos cumplen con los requerimientos del Plan de Continuidad y contingencias del 
BANCO. 
• Garantizar la protección del ambiente físico destinado al resguardo de los respaldos 
de información crítica contra daños, deterioro y hurto.
• Mantener al menos diez años de información crítica en el sitio externo de respaldo 
donde se almacenan las copias de seguridad.
• Para las operaciones crediticias castigadas se debe conservar la documentación 
respaldatoria en medios electrónicos y/o físicos por el plazo mínimo de veinte (20) 
años computables a partir del registro contable de dicho castigo.
• Realizar controles de seguridad adecuados para los traslados de las copias de 
respaldo, evitando exposiciones no autorizadas de la información de los mismos.
• Las copias de respaldo estarán debidamente etiquetadas, a fin de mantener un 
inventario actualizado de los mismos.
Cualquier documento impreso diferente del original y cualquier archivo electrónico que se encuentre fuera de la Intranet del 
Banco Ganadero S.A., será considerada COPIA NO CONTROLADA.
Versión: 1.9
POLÍTICA DE SEGURIDAD 
DE LA INFORMACIÓN 
Código:
PS - 001 
Página 17 de 42
7.- Gestión de Seguridad en Redes 
a. Controles de Red: Se establecerán controles para salvaguardar la confidencialidad e 
integridad del procesamiento de los datos que pasan a través de redes públicas, y para 
proteger los sistemas conectados. 
b. Seguridad de los Servicios de Red: Las características de seguridad, niveles de servicio, y 
administración de requerimientos de todos los servicios de la red serán identificados e 
incluidos en cualquier acuerdo de servicios para enlaces de red. El BANCO asegurará que 
los proveedores de servicio implementen estas características. El proveedor de servicio 
deberá manejar los servicios convenidos de una manera segura. 
8.- Gestión de Medios de Información 
a. Gestión de Medios Removibles: Se implementarán procedimientos para la administración de medios 
informáticos removibles, como cintas de grabación, discos removibles, casetes, dispositivos de 
almacenamiento USB y similares. 
b. Eliminación de Medios de Información: Se definirán procedimientos para la eliminación segura de 
los medios de información respetando las normativas vigentes de los entes reguladores y la legislación 
boliviana.
c. Manejo de la Información: Se definirán procedimientos para el manejo y almacenamiento de la 
información de acuerdo a la clasificación formalmente establecida.
d. Seguridad de la Documentación del Sistema: La documentación del sistema puede contener 
información sensible, por lo que se tomarán los recaudos necesarios para su protección, almacenarlo 
en forma segura y restringiendo su acceso al personal autorizado.
9.- Intercambio de Información 
Se definirán procedimientos para controlar la integridad de los datos en los intercambios de 
información legalmente aceptados. 
a. Procedimientos y Controles de Intercambio de Información: Los procedimientos y 
controles a ser seguidos cuando se usa medios de comunicación electrónicos para el 
intercambio de información deberán proteger los datos contra intercepciones, copia, 
modificación, pérdida de ruta, y destrucción.
b. Acuerdos de Intercambio: Cuando se realicen acuerdos entre el BANCO y terceras partes 
para el intercambio de información y software, se especificará el grado de sensibilidad de la 
información del BANCO involucrada y las consideraciones de seguridad sobre la misma, 
debiendo a la vez contener la cláusula de confidencialidad.
c. Seguridad de Medios Físicos en Transito: Se protegerán los medios que contengan 
información, contra accesos no autorizados, mal uso o alteración durante el transporte más 
allá de los límites físicos del BANCO.
d. Política de Mensajes y Correo Electrónico: La Ley boliviana N° 164 del 08 de agosto 2012 
– “Ley General de Telecomunicaciones, Tecnologías de la Información y Comunicación”, 
faculta al empleador como titular del correo electrónico institucional proporcionado al 
Cualquier documento impreso diferente del original y cualquier archivo electrónico que se encuentre fuera de la Intranet del 
Banco Ganadero S.A., será considerada COPIA NO CONTROLADA.
Versión: 1.9
POLÍTICA DE SEGURIDAD 
DE LA INFORMACIÓN 
Código:
PS - 001 
Página 18 de 42
funcionario independientemente del nombre de usuario y clave de acceso que sean 
necesarias para su uso, debiendo comunicarse expresamente las condiciones de uso y 
acceso del correo electrónico laboral a la empleada o empleado.
Bajo esta ley, el BANCO se reserva el derecho de monitorear la cuenta en cualquier momento 
y de suspenderla en caso de uso indebido. Esta facultad, sin embargo, será ejercida 
salvaguardando la dignidad del trabajador, por tal motivo, el BANCO informará expresamente 
al funcionario las normas para el uso correcto y seguro de este recurso.
e. Sistemas de Información del BANCO: Normas y procedimientos serán desarrollados e 
implementados para proteger la información asociada con la interconexión de sistemas de 
información: Aplicaciones transaccionales, financieras, administrativas, contables, de control 
interno, entre otros tipos de aplicaciones.
Se restringirá el acceso a información de reportes e indicadores de desempeño sensibles 
únicamente a personal autorizado. Se identificará el estado de actividad o inactividad de los 
usuarios en los diferentes sistemas aplicativos críticos que maneja el Banco. 
10.- Servicios de Banca Electrónica 
a. Banca Electrónica: Se verificará que los procedimientos de aprobación de Software 
“Aceptación del Sistema” para las aplicaciones de Banca Electrónica incluyan los requisitos 
técnicos y de seguridad del BCB (Banco Central de Bolivia) y otros reguladores.
En la implementación de sistemas de Banca Electrónica se aplicarán técnicas criptográficas 
para garantizar: Integridad, no repudio, confidencialidad, autenticidad, entre otros.
b. Transacciones en Línea: La información involucrada en transacciones en línea deberá ser 
protegida para prevenir transmisiones incompletas, pérdida de ruta, alteración de mensajes 
no autorizados, divulgación no autorizada, duplicación de mensajes no autorizados.
Para las transacciones electrónicas el Banco ocupa un método de autenticación diferente al 
de acceso, a fin de otorgar mayor seguridad.
c. Información Disponible Públicamente: Se tomarán recaudos para la protección de la 
integridad de la información publicada electrónicamente, a fin de prevenir la modificación no 
autorizada que podría dañar la reputación del BANCO. Se asegurará que la información de 
acceso público, por ejemplo, la información exhibida en la página Web institucional del 
BANCO, no incumpla normativas legales o del regulador ASFI.
En general la publicidad deberá realizarse de forma tal, que se logre transmitir con plena 
claridad toda la información sin comprometer la seguridad e imagen del BANCO.
11.- SWIFT Interbank Financial Telecommunication
Se debe determinar el alcance de revisión de los controles de seguridad Swift en base al 
Marco de Controles de Seguridad para el Cliente de SWIFT de la última versión del año 
emitida. Esto debe ser revisado por lo menos una vez al año, identificando los puntos en 
base al Framework de SWIFT y hardenizacion según arquitectura de SWIFT, si en un futuro 
evoluciona por la necesidad de crecimiento en la infraestructura de Banco Ganadero S.A. 
Cualquier documento impreso diferente del original y cualquier archivo electrónico que se encuentre fuera de la Intranet del 
Banco Ganadero S.A., será considerada COPIA NO CONTROLADA.
Versión: 1.9
POLÍTICA DE SEGURIDAD 
DE LA INFORMACIÓN 
Código:
PS - 001 
Página 19 de 42
se debe contemplar una nueva hardenizacion de arquitectura en base al lineamiento de 
seguridad de CSCF de SWIFT.
Para la revisión se contemplará el listado de CSCF, a continuación, los puntos principales:
El escaneo de vulnerabilidades se realiza por lo menos una vez al año, así como después 
de cualquier cambio significativo al entorno (por ejemplo, nuevos servidores o 
componentes, cambio al diseño de la red modificando/aumentando el rango de 
componentes dentro del ámbito).
Las herramientas de escaneo de vulnerabilidades son de un proveedor reconocido y se 
actualizan con perfiles de escaneo dentro del mes previo al escaneo.
Se selecciona el tipo más conveniente de escaneo de vulnerabilidades (como el uso de 
credenciales o caja negra) para el entorno. 
Las credenciales administrativas que se utilicen para el escaneo se protegen 
adecuadamente.
Se cuenta con suficientes protecciones basadas en los riesgos para reducir al mínimo 
cualquier impacto operativo (por ejemplo, realizar escaneos en modo seguro u omitir 
sistemas que pudieran verse afectados en forma negativa por el escaneo).
Todas las pruebas de penetración o las pruebas de vulnerabilidad efectiva en los servicios y 
productos relacionados con SWIFT o a través de estos son congruentes con la Política de 
Pruebas del Cliente de SWIFT (https://www2.swift.com/go/book/bookext048170/pdf).
Se debe considerar como referencia la plataforma oficial de Swift como punto de partida 
para la revisión anual https://www.swift.com/es/node/300801
Responsabilidad
Los principales responsables en la revisión, son el departamento de TI, Gerencia de COMEX 
(dueño de la arquitectura y ecosistema), Área de ciberseguridad y auditores. Para su revisión, 
verificación, análisis y validación de los puntos que recomienda CSCF SWIFT.
12.- Seguridad de datos en tarjetas de pago (PCI-DSS)
Se debe determinar el alcance de revisión de los controles de la Norma PCI-DSS 
denominando el Ámbito PCI. Este debe ser revisado cada vez que surjan cambios 
importantes en su arquitectura tecnológica identificando los sistemas, procesos y recursos 
que forman parte del almacenamiento, procesamiento o transmisión de los datos del titular 
de tarjeta.
Está prohibido almacenar, procesar o transmitir datos de titulares de tarjetas en las áreas que 
no sean consideradas dentro del Ámbito PCI, caso contrario se debe contar con la debida 
autorización de la Gerencia de Riesgo Integral y justificación de negocio.
Cualquier documento impreso diferente del original y cualquier archivo electrónico que se encuentre fuera de la Intranet del 
Banco Ganadero S.A., será considerada COPIA NO CONTROLADA.
Versión: 1.9
POLÍTICA DE SEGURIDAD 
DE LA INFORMACIÓN 
Código:
PS - 001 
Página 20 de 42
Personal externo no debe contar con acceso a los datos de titulares de tarjetas como así 
también al Ámbito PCI definido, salvo que cuente con autorización y justificación 
correspondiente.
Las actividades que hagan uso de datos de titulares de tarjetas deben ser formalmente 
documentadas a través de procedimientos o instructivos y estos deben ser elaborados en 
base a las funciones y roles de los responsables.
Responsabilidades
Es responsabilidad de todos los funcionarios del Banco reportar los incidentes de seguridad 
relacionados al almacenamiento, procesamiento o transmisión de datos de titulares de 
tarjetas al departamento de Ciberseguridad.
Es responsabilidad de todos los funcionarios el conocimiento y la aplicación de las políticas y 
procedimientos relacionados con el uso de datos de titulares de tarjetas según las 
responsabilidades asignadas en cada área.
13.- Seguimiento y Control 
a. Registro de Auditoría: Se producirá y mantendrá registros de auditoría que contengan 
actividades, excepciones y eventos de seguridad de los usuarios, por un periodo establecido 
para ayudar en futuras investigaciones.
b. Seguimiento al Uso de los Sistemas: Se implementarán procedimientos para monitorear el 
uso de los sistemas de información de aplicativos críticos, a fin de garantizar que los usuarios 
sólo estén desempeñando actividades que hayan sido autorizadas explícitamente. 
Todos los empleados deberán conocer el alcance preciso del uso adecuado de los recursos 
informáticos, advirtiéndoles que determinadas actividades pueden ser objeto de control y 
monitoreo. 
c. Protección de la Información de los Registros de Actividad: Se protegerán los registros 
(pistas de auditoria) contra el acceso no autorizado, manipulación o eliminación. Los registros 
de Auditoría estarán disponibles durante un periodo establecido formalmente. 
d. Registros de la Actividad de Administrador y Operador: Se registrará las actividades de 
los administradores de sistemas, así como de los operadores. 
e. Registro de Acciones Fallidas: Se implementará un procedimiento de registro y revisión de 
los registros de auditoría, orientado a producir un informe de las amenazas detectadas contra 
los sistemas y los métodos utilizados.
Por otra parte, se dispondrá la utilización de herramientas de auditoría o utilitarios adecuados 
para llevar a cabo el control de los registros. 
Se mantendrá separada las funciones entre quienes realizan la revisión y aquellos cuyas 
actividades están siendo monitoreadas.
Cualquier documento impreso diferente del original y cualquier archivo electrónico que se encuentre fuera de la Intranet del 
Banco Ganadero S.A., será considerada COPIA NO CONTROLADA.
Versión: 1.9
POLÍTICA DE SEGURIDAD 
DE LA INFORMACIÓN 
Código:
PS - 001 
Página 21 de 42
f. Sincronización de Relojes: A fin de garantizar la exactitud de los registros de auditoría, en 
todos los equipos y sistemas del BANCO, se mantendrá una correcta configuración de sus 
relojes.
Se dispondrá de procedimientos para la adquisición de la hora oficial del país y su distribución 
en todos los equipos del BANCO. 
SECCIÓN VII. CONTROL DE ACCESOS
1.- Objetivo 
Impedir el acceso no autorizado a los sistemas de información, bases de datos y servicios de 
Información, así como implementar seguridad en los accesos de usuarios por medio de técnicas de 
autenticación y autorización.
2.- Requerimientos para el Control de Acceso 
a. Política de Control de Acceso: Se definirán normas y procedimientos para la gestión de 
accesos a todos los sistemas del BANCO; Sistemas Operativos, Sistemas Plataforma y 
Sistemas Aplicativos.
La cooperación de los usuarios es esencial para la eficacia de la seguridad, por lo tanto, se 
elaborarán campañas para concientizar a los mismos acerca de sus responsabilidades por el 
mantenimiento de controles de acceso eficaces, en particular aquellos relacionados con el 
uso de contraseñas y la seguridad del equipamiento. 
Los propietarios de la información son los responsables de autorizar los accesos a los 
Sistemas de Información de su área, únicamente a personal autorizado de acuerdo a la 
necesidad mínima de hacer y conocer.
En caso de excepciones temporales, deben ser aprobadas por las Gerencias de área 
solicitantes y Gerencia dueña de la información, a fin de asumir los riesgos identificados y 
comunicadas a la Gerencia General indicando el tiempo de la excepción y los motivos.
3.- Administración de Accesos de Usuarios 
Con el objetivo de impedir el acceso no autorizado a la información se implementarán procedimientos 
formales para restringir y controlar la asignación de derechos de acceso a los sistemas, datos y 
servicios de información. 
a. Registro de Usuarios: Toda asignación, reasignación, suplencia o baja del personal será 
comunicada por las vías formalmente definidas. Se mantendrá un registro formal de todas las 
personas habilitadas para utilizar los servicios informáticos.
b. Administración de Privilegios: EL BANCO limitará y controlará la asignación, así como el 
uso de privilegios, en todos los sistemas informáticos del BANCO. 
La asignación de privilegios será realizada en base a roles y la necesidad mínima de 
conocimiento para ejercer sus funciones minimizando riesgos operativos, mismas que 
deberán ser autorizadas por la Gerencia de Área correspondiente como responsables de 
asignación de privilegios a los funcionarios dependientes de su área
Cualquier documento impreso diferente del original y cualquier archivo electrónico que se encuentre fuera de la Intranet del 
Banco Ganadero S.A., será considerada COPIA NO CONTROLADA.
Versión: 1.9
POLÍTICA DE SEGURIDAD 
DE LA INFORMACIÓN 
Código:
PS - 001 
Página 22 de 42
Los privilegios no serán otorgados hasta que se haya completado el proceso formal de 
autorización. 
Se promoverá el uso de rutinas del sistema para evitar la necesidad de otorgar manualmente 
privilegios a los usuarios.
c. Administración de las Contraseñas de Usuario: La asignación de contraseñas se efectuará 
en base al proceso de administración de contraseñas formalmente establecido.
Se requerirá que los usuarios firmen una declaración por la cual se comprometen a mantener 
sus contraseñas personales en secreto. 
Se garantizará que los usuarios cambien las contraseñas iniciales que les han sido asignadas 
la primera vez que ingresen al sistema. 
Los desbloqueos y entrega de contraseñas provisionales a los usuarios que olvidan su 
contraseña, sólo serán suministrados una vez que se identifique a la persona como el usuario 
legítimo. 
En base a la evaluación de riesgos, se considerará el uso de otras tecnologías de 
autenticación y autorización de usuarios, como ser la biométrica, verificación de firma, 
dispositivos token, etc. 
Se mantendrán ilegibles todas las contraseñas durante la transmisión y el almacenamiento 
en todos los componentes del sistema mediante mecanismos de cifrado sólido. 
d. Administración de Contraseñas Críticas: En los diferentes ambientes de procesamiento 
existen cuentas de usuarios (conocidas como cuentas de super-usuarios) con las cuales es 
posible efectuar actividades críticas para el BANCO. Dichas cuentas no serán de uso habitual, 
sino que sólo serán utilizadas ante una necesidad específica de realizar alguna tarea que lo 
requiera y se encontrarán protegidas por contraseñas con un mayor nivel de complejidad que 
el habitual.
e. Revisión de los Derechos de Acceso: A fin de mantener un control eficaz del acceso a los 
datos y servicios de información, se llevará a cabo un proceso formal, a intervalos regulares, 
a fin de revisar los derechos de acceso de los usuarios. 
4.- Responsabilidad del usuario 
a. Uso de Contraseñas: Los usuarios deberán seguir buenas prácticas de seguridad en la 
selección y uso de contraseñas. Los usuarios deberán: 
✓ Mantener sus contraseñas en secreto. 
✓ Pedir el cambio de la contraseña siempre que exista un posible indicio de compromiso 
del sistema o de las contraseñas. 
✓ Seleccionar contraseñas de calidad 
✓ Cambiar las contraseñas cada vez que el sistema lo solicite y evitar reutilizar o reciclar 
viejas contraseñas. 
✓ Cambiar las contraseñas provisionales en el primer inicio de sesión. 
✓ Notificar cualquier incidente de seguridad relacionado con sus contraseñas: pérdida, robo 
o indicio de pérdida de confidencialidad. 
Cualquier documento impreso diferente del original y cualquier archivo electrónico que se encuentre fuera de la Intranet del 
Banco Ganadero S.A., será considerada COPIA NO CONTROLADA.
Versión: 1.9
POLÍTICA DE SEGURIDAD 
DE LA INFORMACIÓN 
Código:
PS - 001 
Página 23 de 42
b. Equipo Desatendido por el Usuario: Los usuarios deberán garantizar que los equipos 
desatendidos sean protegidos adecuadamente al moverse de su estación de trabajo, incluso 
por breves minutos.
c. Política de Pantalla y Escritorio Limpio: El BANCO adopta una política de escritorios 
limpios para proteger documentos en papel y dispositivos de almacenamiento removibles y 
una política de pantallas limpias en las instalaciones de procesamiento de información, a fin 
de reducir los riesgos de acceso no autorizado, pérdida y daño de la información, tanto 
durante el horario normal de trabajo como fuera del mismo. 
5.- Control de Acceso a Redes 
a. Política de Utilización de los Servicios de Red: Las conexiones no seguras a los servicios 
de red pueden afectar a todo el BANCO, por lo tanto, se controlará el acceso a los servicios 
de red tanto internos como externos. Esto es necesario para garantizar que los usuarios que 
tengan acceso a las redes y a sus servicios, no comprometan la seguridad de los mismos. 
Para ello, se desarrollarán procedimientos para la activación y desactivación de derechos de 
acceso a las redes.
b. Autenticación de Usuarios para Conexiones Externas: Las conexiones externas son de
gran potencial para accesos no autorizados a la información del BANCO. Por consiguiente, el 
acceso de usuarios remotos estará sujeto al cumplimiento de procedimientos de 
autenticación.
c. Identificación del Equipo en la Red: Se identificará de forma automática el equipo que 
origine la conexión, como un medio para autenticar conexiones de ubicaciones y 
equipamiento específicos.
d. Protección de los Puertos de Diagnóstico y Configuración Remotos: Se controlará el 
acceso físico y lógico a los puertos de diagnóstico y de configuración.
e. Separación de Redes: Se definirán y documentarán subredes de la red del BANCO. Estos 
perímetros se implementarán mediante la instalación de equipos “firewall” o redes privadas 
virtuales, para filtrar el tráfico entre las subredes y para bloquear el acceso no autorizado.
f. Control de Conexión a la Red: Se implementarán controles para limitar la capacidad de 
conexión de los usuarios.
g. Control de rutas de Red: Estos controles contemplarán mínimamente la verificación positiva 
de direcciones de origen y destino.
h. Acceso a Internet: El acceso a Internet será utilizado con propósitos autorizados o con el 
destino por el cual fue provisto. Se definirán procedimientos para solicitar y aprobar accesos 
a Internet. 
6.- Control de Acceso al Sistema Operativo 
a. Procedimientos Seguros de Inicio de Sesión (“log-on”): El acceso de los usuarios al 
sistema operativo será controlado mediante sistemas informáticos controladores de dominio 
en la red y con mecanismos seguros de inicio de sesión. 
Cualquier documento impreso diferente del original y cualquier archivo electrónico que se encuentre fuera de la Intranet del 
Banco Ganadero S.A., será considerada COPIA NO CONTROLADA.
Versión: 1.9
POLÍTICA DE SEGURIDAD 
DE LA INFORMACIÓN 
Código:
PS - 001 
Página 24 de 42
b. Identificación y Autenticación del Usuario: Todos los usuarios (incluido personal de 
Tecnología de la Información) tendrán un identificador único (ID de usuario) solamente para 
su uso personal exclusivo, de manera que las actividades puedan rastrearse con posterioridad 
hasta llegar al individuo responsable. Los identificadores de usuario no deberán revelar 
ningún indicio del nivel de privilegio. 
c. Sistema de Administración de Contraseñas: Las contraseñas constituyen uno de los 
principales medios de validación de la autoridad de un usuario para acceder a un servicio 
informático. Los sistemas de administración de contraseñas constituyen una herramienta 
eficaz e interactiva que garantice contraseñas de calidad. 
El sistema de administración de contraseñas deberá:
✓ Imponer el uso de contraseñas individuales para determinar responsabilidades. 
✓ Permitir que los usuarios seleccionen y cambien sus propias contraseñas (luego de 
cumplido el plazo mínimo de mantenimiento de las mismas) 
✓ Imponer una selección de contraseñas de calidad. 
✓ Obligar a los usuarios a cambiar las contraseñas provisionales en su primer procedimiento 
de identificación. 
✓ Mantener un registro de las últimas contraseñas utilizadas por el usuario, y evitar la 
reutilización de las mismas. 
✓ Evitar mostrar las contraseñas en pantalla, cuando son ingresadas.
✓ Almacenar las contraseñas en forma cifrada.
d. Uso de Utilitarios del Sistema: La mayoría de las instalaciones informáticas tienen uno o 
más programas utilitarios que podrían tener la capacidad de pasar por alto los controles de 
sistemas y aplicaciones. Su uso en el BANCO será limitado y controlado. 
e. Expiración de la Sesión: Las sesiones inactivas del sistema operativo serán bloqueadas 
luego de un periodo de inactividad definido formalmente y documentado en la norma para el 
control de accesos. 
El funcionario que abandona su puesto de trabajo momentáneamente, activará protectores 
de pantalla con contraseñas, a los efectos de evitar que terceros puedan ver su trabajo o 
continuar con la sesión de usuario de sistema operativo habilitada.
f. Limitaciones del Tiempo de Conexión: Las restricciones al horario de conexión suministran 
seguridad adicional a las aplicaciones de alto riesgo. La limitación del periodo durante el cual 
se permiten las conexiones de terminales a los servicios informáticos reduce el espectro de 
oportunidades para el acceso no autorizado. Se implementará un control de esta índole para 
aplicaciones informáticas sensibles. 
7.- Control de Acceso a las Aplicaciones y a la Información 
a. Restricción del Acceso a la Información: Se restringirá el conocimiento de los usuarios 
acerca de la información o de las funciones de los sistemas de aplicación a las cuales no sean 
autorizados a acceder, con la adecuada edición y publicación de la documentación de usuario.
Se restringirá el acceso a la información que no sea por medio del sistema aplicativo 
encargado de su procesamiento, es decir, quedará restringido el acceso directo al dato 
almacenado.
Cualquier documento impreso diferente del original y cualquier archivo electrónico que se encuentre fuera de la Intranet del 
Banco Ganadero S.A., será considerada COPIA NO CONTROLADA.
Versión: 1.9
POLÍTICA DE SEGURIDAD 
DE LA INFORMACIÓN 
Código:
PS - 001 
Página 25 de 42
b. Aislamiento de Sistemas Sensibles: El proceso de gestión de riesgos de seguridad de la 
información identificará los activos de información y los clasificará según sensibilidad o 
criticidad. Los sistemas sensibles contarán con un recurso informático “dedicado” (separado 
de otros sistemas). 
8.- Computación Móvil, Comunicaciones virtuales y Teletrabajo
a. Computación y Comunicaciones Móviles: Para el personal con acceso a los sistemas del 
BANCO a través de tecnologías de acceso remoto, se prohíbe copiar, mover y almacenar 
información confidencial sin una necesidad específica del BANCO que lo autorice de manera 
explícita.
La utilización de dispositivos móviles incrementa la probabilidad de ocurrencia de incidentes 
del tipo de pérdida, robo o hurto. En consecuencia, se entrenará especialmente al personal 
que los utilice. Se desarrollarán normas y procedimientos sobre los cuidados especiales a 
observar ante la posesión de dispositivos móviles. 
b. Comunicaciones virtuales: El uso de tecnologías para reuniones, conferencias, 
clases virtuales en nombre del Banco deben ser gestionadas bajo plataformas autorizadas.
Se implementarán normas y procedimientos para la administración de las herramientas 
autorizadas para realizar reuniones virtuales,
Está prohibido publicar, compartir enlaces de reuniones virtuales no autorizadas por los 
organizadores de estos eventos.
c. Teletrabajo (Trabajo Remoto): El trabajo remoto utiliza tecnología de comunicaciones para 
permitir que el personal trabaje de forma segura remotamente desde un lugar externo al 
BANCO (desde su hogar), sin embargo, esta situación requiere que el lugar externo cuente 
con controles de seguridad y ergonomía de trabajo establecida por ley para el trabajador. 
Por lo tanto, sólo será autorizado cuando tenga la aprobación formal de la Gerencia General, 
previo análisis de riesgo a cargo de la Gerencias y niveles correspondientes. 
Estos casos serán considerados “de excepción” y serán contemplados en situaciones que 
justifiquen la imposibilidad de otra forma de acceso y la urgencia.
Se utilizarán tecnologías seguras para las conexiones remotas como ser VPNs (Red privada 
virtual).
La modalidad de tele-trabajo debe cumplir con los lineamientos de seguridad establecidos en 
las políticas y normas de Seguridad de la Información.
El área de TI es responsable de proporcionar los recursos tecnológicos adecuados y seguros
para realizar las actividades de Tele-trabajo.
El funcionario que realizará trabajo remoto, es responsable de los recursos que son otorgados 
por el Banco debiendo resguardar la seguridad física y lógica de los equipos otorgados.
Controlar que los dispositivos de la modalidad tele-trabajo no autorizados no puedan acceder 
a ambientes productivos y transaccionales del Topaz Banking y acceso a la Base de Datos 
Cualquier documento impreso diferente del original y cualquier archivo electrónico que se encuentre fuera de la Intranet del 
Banco Ganadero S.A., será considerada COPIA NO CONTROLADA.
Versión: 1.9
POLÍTICA DE SEGURIDAD 
DE LA INFORMACIÓN 
Código:
PS - 001 
Página 26 de 42
de producción.
Los dispositivos que sean utilizados en modalidad de Tele-trabajo deben contar con cifrado 
en todas las unidades de almacenamiento.
Se deben establecer procedimientos internos que permitan controlar la implementación y 
cumplimiento de los presentes lineamientos de Teletrabajo
d. BYOD (Bring Your Own Device): La utilización de dispositivos propios para 
acceder a recursos del Banco deben cumplir con los siguientes lineamientos:
• Limitar los accesos a ambientes productivos y transaccionales del Topaz Banking y 
acceso a la Base de Datos de producción.
• Implementar listas negras de aplicaciones y software no recomendadas.
• Implementar controles para el almacenamiento de datos del Banco.
• Garantizar el borrado de la información ante algún evento de robo o perdida de los 
dispositivos.
• Establecer el bloqueo de pantalla de forma automática.
• Uso mandatorio de VPN en todo momento.
• El perfil de VPN para estos usuarios debe ser exclusivo para limitar el acceso a redes 
desconocidas o que no correspondan a las funciones del usuario.
• Control de acceso a la red interna del Banco mediante MAC.
• Utilizar únicamente las aplicaciones o el Software autorizado por el Banco.
• Uso obligatorio de herramienta antivirus y/o antimalware.
• El dispositivo debe contar con sistema operativo actualizado y licencia original.
• Se prohíbe el uso de software no licenciado (crackeado)
Todo dispositivo propio debe ser evaluado previamente para garantizar que se encuentra 
configurado y actualizado correctamente.
Asimismo, se deben llevar a cabo actividades de formación en los funcionarios que hagan uso de 
dispositivos propios. Se deben establecer procedimientos internos que permitan controlar la 
implementación y cumplimiento de los presentes lineamientos del uso de dispositivos propios.
SECCIÓN VIII. ADQUISICIÓN, DESARROLLO Y MANTENIMIENTO DE SISTEMAS DE 
INFORMACIÓN 
1.- Objetivo 
Asegurar la inclusión de controles de seguridad y validación de datos en el desarrollo de los sistemas 
de información, así como definir y documentar las normas y procedimientos que se aplicarán durante 
el ciclo de vida de los aplicativos y en la infraestructura base en la cual se instalan.
2.- Requerimientos de Seguridad de los Sistemas de Información 
a. Análisis y Especificaciones de los Requerimientos de Seguridad: Esta Política se 
implementa para incorporar seguridad a los sistemas de información (propios o de terceros) 
y a las mejoras o actualizaciones que se les incorporen. 
Cualquier documento impreso diferente del original y cualquier archivo electrónico que se encuentre fuera de la Intranet del 
Banco Ganadero S.A., será considerada COPIA NO CONTROLADA.
Versión: 1.9
POLÍTICA DE SEGURIDAD 
DE LA INFORMACIÓN 
Código:
PS - 001 
Página 27 de 42
Se definirán los controles a ser implementados en los sistemas desarrollados internamente o 
por terceros, en función de una evaluación previa de riesgos. 
Los requerimientos para nuevos sistemas o mejoras a los existentes, especificarán la 
necesidad de controles. Estas especificaciones indicarán los controles automáticos a 
incorporar en el sistema, como así también los controles manuales de apoyo. 
Se definirá un procedimiento para que durante las etapas de análisis y diseño del sistema, se 
incorporen a los requerimientos, los correspondientes controles de seguridad. 
Se evaluarán los requerimientos de seguridad y los controles requeridos, teniendo en cuenta 
que éstos serán proporcionales en costo y esfuerzo al valor del bien que se quiere proteger 
y al daño potencial que pudiera ocasionar a las actividades realizadas. 
Se definirá en función a la criticidad de la información, los requerimientos de protección 
mediante métodos criptográficos. 
3.- Procesamiento Correcto en las Aplicaciones 
Los controles introducidos en la etapa de diseño, son significativamente menos costosos de 
implementar y mantener que aquellos incluidos durante o después de la implementación. 
a. Validación de Datos de Entrada: Se definirá un procedimiento que durante la etapa de 
diseño, especifique controles que aseguren la validez de los datos ingresados.
b. Controles de Procesamiento Interno: Se definirá un procedimiento para que durante la 
etapa de diseño, se incorporen controles de validación a fin de eliminar o minimizar los riesgos 
de fallas de procesamiento y/o corrupciones de datos por procesos de errores.
c. Integridad del Mensaje: Se identificarán los requerimientos para asegurar la autenticidad y 
para proteger la integridad del mensaje de las aplicaciones, así implementar controles 
apropiados. Cuando una aplicación tenga previsto el envío de mensajes que contengan 
información clasificada, se implementarán controles criptográficos.
d. Validación de Datos de Salida (Output): Se definirá procedimientos para validar la salida 
de los datos de las aplicaciones, a fin de comprobar la razonabilidad, conciliación, exactitud, 
responsabilidad y suficiencia de la información. 
4.- Controles Criptográficos 
Se utilizarán mecanismos y técnicas criptográficas para la protección de la información en base a un 
análisis de riesgo efectuado, con el fin de asegurar una adecuada protección de la confidencialidad e 
integridad de los datos. 
a. Política para el Uso de Controles Criptográficos: El BANCO establece la presente Política 
de uso de controles criptográficos, a fin de determinar su correcto uso. Para ello se deberán 
normar y documentar formalmente los mecanismos, técnicas, protocolos y algoritmos de 
cifrado para la protección, transmisión y resguardo de información clasificada. 
Cualquier documento impreso diferente del original y cualquier archivo electrónico que se encuentre fuera de la Intranet del 
Banco Ganadero S.A., será considerada COPIA NO CONTROLADA.
Versión: 1.9
POLÍTICA DE SEGURIDAD 
DE LA INFORMACIÓN 
Código:
PS - 001 
Página 28 de 42
b. Nivel de Cifrado: Mediante la evaluación de riesgos, se identificará el nivel requerido de 
protección, tomando en cuenta el tipo y la calidad del algoritmo de cifrado utilizado y la longitud 
de las llaves criptográficas a utilizar. 
Al implementar la presente política, se deberá hacer referencia a las regulaciones y leyes 
aplicables a la fecha, para no recaer en incumplimientos.
c. Firmas y Certificados Digitales: Las firmas digitales proporcionan un medio de protección 
de la autenticidad e integridad de los documentos electrónicos. Pueden aplicarse a cualquier 
tipo de documento que se procese electrónicamente. 
El uso de firmas digitales, está regido a la legislación boliviana vigente (Ley N° 164 del 08 de 
Agosto 2011) y el conjunto de normas complementarias y procedimientos que describen las 
condiciones bajo las cuales una firma digital es legalmente válida. 
Por otro lado, los certificados digitales deberán enmarcarse en las normativas e instrucciones 
emitidas por los entes reguladores.
La implementación de firmas digitales debe ser gestionada en coordinación entre las áreas 
de Ciberseguridad y Asesoría Legal.
Está prohibido que funcionarios del Banco utilicen firmas digitales que no hayan sido 
tramitadas o gestionadas por las áreas asignadas.
d. Gestión de Llaves Criptográficas: Todas las claves serán protegidas contra modificación y 
destrucción, las claves secretas y privadas serán protegidas contra copia o divulgación no 
autorizada. Se protegerá y restringirá el acceso al equipamiento utilizado para generar, 
almacenar y archivar llaves criptográficas, considerándolo crítico o de alto riesgo.
5.- Seguridad de los Archivos del Sistema 
Se garantizará que los desarrollos y actividades de soporte a los sistemas se lleven a cabo de manera 
segura, controlando el acceso a los archivos del sistema. 
a. Control de Software en Producción: Se definirán controles a realizar durante la 
implementación del software en ambiente de producción, a fin de minimizar el riesgo de 
alteración de los sistemas. Toda aplicación, desarrollada internamente por el BANCO o por 
un tercero, tendrá un único responsable designado por la Gerencia General.
Se documentarán normas e implementarán controles a fin de garantizar que ningún 
desarrollador de aplicaciones pueda acceder a los ambientes de producción.
b. Protección de la Data en Ambiente de Prueba: Las pruebas de los sistemas se efectuarán 
sobre datos extraídos del ambiente de Producción. 
Para proteger los datos sensibles se establecerán normas y procedimientos que restrinjan el 
uso de datos reales en ambientes de prueba y desarrollo, despersonalizando la información 
antes de su uso. 
Cualquier documento impreso diferente del original y cualquier archivo electrónico que se encuentre fuera de la Intranet del 
Banco Ganadero S.A., será considerada COPIA NO CONTROLADA.
Versión: 1.9
POLÍTICA DE SEGURIDAD 
DE LA INFORMACIÓN 
Código:
PS - 001 
Página 29 de 42
La base de datos del ambiente de prueba deberá contar con los mismos protocolos de 
seguridad que la base de datos de producción. 
Control de Acceso a las Librerías de Código Fuente: Para reducir la probabilidad de alteración 
de programas fuentes, se aplicarán controles de acceso y segregación de funciones entre 
personal de desarrollo y el de producción. 
6.- Seguridad en los Procesos de Desarrollo y Soporte 
Dado que los analistas y programadores tienen el conocimiento total de la lógica de los procesos en 
los sistemas del BANCO, se implementarán controles que eviten maniobras dolosas por parte de 
estas personas u otras que puedan operar sobre los sistemas, bases de datos y plataformas de 
software de y en el caso de que se lleven a cabo, identificar rápidamente al responsable. 
a. Procedimientos de Control de Cambios: A fin de minimizar los riesgos de alteración de los 
sistemas de información, se implementarán controles estrictos durante la implementación de 
cambios en producción imponiendo el cumplimiento de procedimientos formales y respetando 
la segregación de funciones. 
b. Revisiones Técnicas de las Aplicaciones Después de Cambios en el Sistema Operativo: 
Toda vez que se realice un cambio (upgrade) en el Sistema Operativo, se revisarán los 
sistemas aplicativos para asegurar que no se produzca un impacto en su funcionamiento o 
seguridad. 
c. Restricción de Cambio en los Paquetes de Software: En caso de considerar necesaria la 
modificación de paquetes de software suministrados por proveedores, se deberán considerar 
los términos y condiciones de licencia, conveniencia de la modificación a cargo de personal 
del BANCO, o a cargo del proveedor, impacto del mantenimiento y procedimientos para 
deshacer el cambio y volver al estado anterior (rollback).
d. Canales Ocultos para Fuga de Información: Un canal oculto puede exponer información 
utilizando algunos medios indirectos y desconocidos. 
El código malicioso está diseñado para afectar a un sistema en forma no autorizada y no 
requerida por el usuario. En este sentido, se redactarán normas y procedimientos que 
incluyan al menos:
✓ Adquirir programas a proveedores acreditados o productos ya evaluados. 
✓ Examinar los códigos fuentes antes de utilizar los programas. 
✓ Controlar el acceso y las modificaciones al código instalado. 
✓ Utilizar herramientas para la protección contra la infección del software con código 
malicioso. 
e. Desarrollo Interno de Software: Las aplicaciones serán desarrolladas en base a directrices 
de codificación ampliamente aceptadas, a fin de evitar vulnerabilidades de codificación 
comunes en los procesos de desarrollo de software. 
Se realizarán pruebas independientes a las aplicaciones desarrolladas antes y después de 
su habilitación en producción, a fin de minimizar el riesgo de que existan vulnerabilidades o 
amenazas no contempladas. 
Cualquier documento impreso diferente del original y cualquier archivo electrónico que se encuentre fuera de la Intranet del 
Banco Ganadero S.A., será considerada COPIA NO CONTROLADA.
Versión: 1.9
POLÍTICA DE SEGURIDAD 
DE LA INFORMACIÓN 
Código:
PS - 001 
Página 30 de 42
f. Desarrollo Externo de Software: Para el caso que se considere la tercerización del 
desarrollo de software, se establecerán normas y procedimientos que contemplen al menos: 
✓ Acuerdos de licencias, propiedad de código y derechos conferidos 
✓ Requerimientos contractuales con respecto a la calidad del código y la existencia de 
garantías. 
7.- Gestión de las Vulnerabilidades Técnicas 
Este proceso busca reducir el riesgo resultante de la explotación de vulnerabilidades técnicas. 
El BANCO se asegurará de que todos los componentes de sistemas y software cuenten con los 
“parches” de seguridad más recientes para la protección contra vulnerabilidades conocidas. 
a. Control de vulnerabilidades técnicas: Se deberá evaluar la exposición de los sistemas del 
BANCO ante vulnerabilidades técnicas conocidas, a través de un proceso formal de 
identificación y clasificación de vulnerabilidades recientemente descubiertas.
Se establecerán roles y las responsabilidades asociados a la gestión de vulnerabilidades 
técnicas. Los sistemas críticos para el negocio del BANCO se deberán tratar primero.
SECCION IX. GESTIÓN DE INCIDENTES DE SEGURIDAD DE LA INFORMACIÓN 
1.- Objetivo 
Garantizar que los eventos de seguridad de la información y las debilidades asociadas a los sistemas 
de información sean comunicados de forma tal que se apliquen las acciones correctivas en el tiempo 
correcto.
2.- Reporte de Eventos y Debilidades en la Seguridad de la Información 
a. Reporte de los eventos en la Seguridad de la Información: Los incidentes relativos a la 
seguridad deberán ser comunicados por cualquier funcionario del BANCO que identifique o 
sospeche de una violación a la seguridad, a través de los canales apropiados (formales) y tan 
pronto como sea posible. 
Se establecerá un procedimiento formal de comunicación y de respuesta a incidentes, 
indicando la acción que ha de emprenderse al recibir un informe sobre incidentes.
b. Reporte de Debilidades de la Seguridad: Los usuarios, al momento de tomar conocimiento 
directo o indirectamente acerca de una debilidad de seguridad, son responsables de registrar 
y comunicar las mismas a través de los canales habilitados. 
Se prohíbe a los funcionarios realizar pruebas para detectar y/o demostrar una supuesta 
debilidad o falla de seguridad. 
Se establecerán procedimientos para la comunicación de anomalías de software. 
Se prohíbe a los funcionarios quitar el software que supuestamente tiene una anomalía, a 
menos que estén autorizados formalmente para hacerlo. La contención de incidentes será 
realizada por personal experimentado, adecuadamente habilitado. 
Cualquier documento impreso diferente del original y cualquier archivo electrónico que se encuentre fuera de la Intranet del 
Banco Ganadero S.A., será considerada COPIA NO CONTROLADA.
Versión: 1.9
POLÍTICA DE SEGURIDAD 
DE LA INFORMACIÓN 
Código:
PS - 001 
Página 31 de 42
3.- Gestión de Incidentes y Mejoras en Seguridad de la Información 
a. Responsabilidades y Procedimientos: Se elaborarán y mantendrán actualizados planes de 
respuesta a incidentes de seguridad de la información, para ser aplicados en caso de fallos o 
sospechas de acciones irregulares en los sistemas.
Se conformará un Equipo de Respuesta a Incidentes de Seguridad, integrado de forma 
multidisciplinaria por especialistas de las diferentes áreas (informática, legal, Ciberseguridad, 
riesgos, etc.), si es necesario se debe acudir a instancias externas teniendo un listado de 
contactos actualizado.
Se capacitará al personal de respuesta a incidentes de seguridad en las responsabilidades 
de su competencia. 
Se seguirá el proceso disciplinario formal contemplado en las normas del BANCO para el 
personal que viole las políticas de seguridad, pudiendo extenderse a lo establecido en el 
Código Penal de Bolivia, Artículo 363 bis.- (MANIPULACION INFORMATICA) y otros 
aplicables al caso. 
b. Aprendizaje a partir de los Incidentes en la Seguridad de la Información: Se realizarán 
revisiones posteriores a los eventos con la finalidad de aprender del incidente y del esfuerzo 
resultante de respuesta y recuperación.
Se calculará el costo del incidente una vez que se han llevado a cabo todas las actividades 
de respuesta al sumar el costo de cualquier pérdida o daño al costo del trabajo y cualquier 
software o hardware especial que se haya necesitado para manejar el incidente. 
Se definirá un proceso que permita documentar, cuantificar y monitorear los tipos, volúmenes 
y costos de los incidentes y anomalías. 
Se desarrollará un registro histórico claro de los eventos.
c. Recolección de Evidencia: Es necesario contar con adecuada evidencia para respaldar una 
acción contra una persona o entidad. 
Se desarrollarán procedimientos para la preservación de evidencia digital en la escena del 
hecho. 
Se tomarán todos los recaudos establecidos para la obtención de la evidencia. Este proceso 
deberá ser realizado por personal idóneo a la materia. 
Las acciones internas serán realizadas tomando los recaudos y considerando que la 
investigación pudiera extenderse a un proceso legal. 
Se deberá garantizar una sólida cadena de custodia, integridad y admisibilidad legal de la 
evidencia, evitando su contaminación por omisión o intención. 
Las pruebas no deberán conseguirse a través de acciones ilícitas o que generen 
susceptibilidad o “duda razonable”.
Cualquier documento impreso diferente del original y cualquier archivo electrónico que se encuentre fuera de la Intranet del 
Banco Ganadero S.A., será considerada COPIA NO CONTROLADA.
Versión: 1.9
POLÍTICA DE SEGURIDAD 
DE LA INFORMACIÓN 
Código:
PS - 001 
Página 32 de 42
SECCIÓN X. GESTIÓN DE LA CONTINUIDAD DEL NEGOCIO 
1.- Objetivo 
Contrarrestar las interrupciones de las actividades del BANCO y proteger los procesos críticos de 
negocio a los efectos de fallas significativas de los sistemas de información o desastres y asegurar 
su reanudación oportuna.
2.- Aspectos de la Seguridad de la Información en la Gestión de la Continuidad del BANCO 
a. Seguridad de la Información en el Proceso de Gestión de la Continuidad del BANCO: El 
Comité Directivo de Riesgos, será el responsable de la coordinación del desarrollo de los 
procesos que garanticen la continuidad de las actividades del BANCO. 
Se realizará un Análisis de Impacto del Negocio para identificar los procesos críticos y 
sensibles del BANCO.
b. Continuidad del Negocio y Evaluación de los Riesgos: La evaluación de riesgos para 
continuidad del negocio deberá:
✓ Identificar los eventos (amenazas) que puedan ocasionar interrupciones en los procesos 
de las actividades del BANCO. 
✓ Evaluar los riesgos para determinar el impacto de dichas interrupciones, tanto en términos 
de magnitud de daño como del período de recuperación. 
✓ Identificar los controles preventivos 
Se deberá analizar todos los procesos de las actividades del BANCO y no limitarse a las 
instalaciones de procesamiento de información. 
Según los resultados de la evaluación de riesgos, se deberá desarrollar un “Plan de 
Continuidad del Negocio y Recuperación de Desastres” para determinar el enfoque global 
con el que se abordará la continuidad de las actividades del BANCO. 
c. Elaboración e Implementación de Planes que Incluyan Seguridad de la Información: Se 
definirán, documentarán, probarán y actualizarán, planes de contingencia que conformen el 
Plan de Continuidad del Negocio y Recuperación de Desastres.
Se elaborarán los planes de contingencia necesarios para garantizar la continuidad de las 
operaciones del BANCO. 
El proceso de planificación de la continuidad de las actividades contemplará al menos los 
siguientes puntos: 
✓ Identificar y acordar todas las funciones y procedimientos de emergencia. 
✓ Analizar los posibles escenarios de contingencia y definir las acciones correctivas a 
implementar en cada caso. 
✓ Documentar los procedimientos y procesos acordados. 
✓ Instruir adecuadamente al personal, en materia de procedimientos y procesos de 
emergencia acordados, incluyendo el manejo de crisis. 
✓ Instruir al personal involucrado en los procedimientos de reanudación y recuperación. 
Cualquier documento impreso diferente del original y cualquier archivo electrónico que se encuentre fuera de la Intranet del 
Banco Ganadero S.A., será considerada COPIA NO CONTROLADA.
Versión: 1.9
POLÍTICA DE SEGURIDAD 
DE LA INFORMACIÓN 
Código:
PS - 001 
Página 33 de 42
✓ Probar y actualizar los planes. 
d. Marco para la Planificación de la Continuidad del BANCO: El proceso de planificación 
estará enfocado en los objetivos de las actividades del BANCO y su reanudación en un plazo 
aceptable. 
Se mantendrá un solo marco para los planes de contingencia de las actividades del BANCO, 
a fin de garantizar que los mismos sean uniformes y se puedan identificar prioridades de 
prueba y mantenimiento. 
Cada plan de contingencia especificará claramente las condiciones para su puesta en 
marcha, así como las personas a cargo de ejecutar cada componente del mismo. Cuando se 
identifiquen nuevos requerimientos, se modificarán los procedimientos de emergencia 
establecidos. 
e. Pruebas, Mantenimiento y Revaluación de los Planes de Continuidad del BANCO: 
Debido a que los planes de continuidad del BANCO pueden fallar, por suposiciones 
incorrectas, errores o cambios en el equipamiento, se deberá realizar las siguientes 
acciones: 
✓ Se establecerá un cronograma de pruebas periódicas de cada uno de los planes de 
contingencia. 
✓ El cronograma indicará quienes son los responsables de llevar a cabo cada una de las 
pruebas. 
✓ Las pruebas deberán programarse durante un tiempo que minimice las interrupciones de 
operaciones normales del BANCO. 
Una vez que se hayan definido los objetivos de la prueba, deberá asegurarse que un tercero 
independiente esté presente para monitorear y evaluar la prueba. Si todo funciona a la 
perfección, se programará una prueba mucho más robusta con objetivos más desafiantes 
para la próxima prueba. 
Las pruebas deberán ser simples al inicio y más complejas gradualmente, ampliando los 
objetivos y criterios de éxito de pruebas anteriores de manera de crear confianza y minimizar 
el riesgo para el BANCO. 
Todas las modificaciones efectuadas serán propuestas por el Comité Directivo de Riesgos
para su aprobación. 
SECCIÓN XI. COMPUTACIÓN EN LA NUBE
1.- Objetivo 
Garantizar la seguridad de la información a fin de reducir los riesgos de confidencialidad, integridad y 
disponibilidad de la información a través de la obtención de servicios en la nube, cumpliendo con los 
requisitos de la ASFI y normas internacionales.
Cualquier documento impreso diferente del original y cualquier archivo electrónico que se encuentre fuera de la Intranet del 
Banco Ganadero S.A., será considerada COPIA NO CONTROLADA.
Versión: 1.9
POLÍTICA DE SEGURIDAD 
DE LA INFORMACIÓN 
Código:
PS - 001 
Página 34 de 42
2.- Aspectos de la Seguridad de la Información en la Gestión de Servicios en la Nube.
El Banco contará con una Norma especificando los lineamientos de seguridad para la protección de 
datos en la nube.
También debe seguir los siguientes puntos.
a. Mantener procedimientos formalizados con el fin de definir los criterios que garanticen el 
debido tratamiento, protección y privacidad de datos personales cuando se utilice los servicios 
de computación en la nube.
b. Se solicitará la no objeción de la ASFI del proyecto de implementación del servicio de 
computación en la nube, indicando.
• Que no se vulnerará el Derecho a la Reserva y Confidencialidad, establecida en el 
Artículo 472 de la Ley N°393 de Servicios Financieros
• Que no se encuentra dentro de las Limitaciones y Prohibiciones, establecidas en los 
Títulos II, III y IV de la Ley N°393 de Servicios Financieros, referidos a “Servicios 
Financieros y Régimen de Autorizaciones”, que pueden realizar las entidades 
supervisadas por ASFI;
• Que el proveedor del servicio cumpla con los requisitos de seguridad de la 
información dispuestos en el Reglamento de la Circular ASFI/395/2016;
• Que el proveedor del servicio cumpla con la normativa y legislación del Estado 
Plurinacional de Bolivia, existiendo la posibilidad de poder ser examinado por ASFI 
y/o empresas de auditoría externa bolivianas;
• Que, en su análisis y evaluación de riesgos en seguridad de la información, se 
justifique la pertinencia de contratar el servicio de computación en la nube;
• Que en las cláusulas del contrato se contemplen los aspectos señalados en los 
puntos anteriores
c. Antes de la contratación de los servicios de computación en la nube, se realizará un 
diagnóstico del nivel de riesgo y la sensibilidad de la información o recursos tecnológicos a 
ser expuestos en la nube.
SECCIÓN XII. CUMPLIMIENTO 
1.- Objetivo 
Establecer las responsabilidades y roles de actuación conducentes al cumplimiento de las 
disposiciones normativas y contractuales, a fin de evitar responsabilidades administrativas civiles o 
penales al BANCO y/o al empleado, como resultado de incumplimientos, así como garantizar el 
cumplimiento de la política, normas y procedimientos de seguridad del BANCO. 
2.- Responsabilidades 
Como parte del sistema de control al cumplimiento a las Políticas, Normas y Procedimientos de 
Seguridad de la Información:
a) Esta Política se aplica a todo el personal del BANCO, cualquiera sea su situación de contrato. 
Cualquier documento impreso diferente del original y cualquier archivo electrónico que se encuentre fuera de la Intranet del 
Banco Ganadero S.A., será considerada COPIA NO CONTROLADA.
Versión: 1.9
POLÍTICA DE SEGURIDAD 
DE LA INFORMACIÓN 
Código:
PS - 001 
Página 35 de 42
b) Como primera línea de defensa los Gerentes de área velarán por la correcta implementación 
y cumplimiento de las normas y procedimientos de seguridad establecidos en la presente 
Política, dentro de su área de responsabilidad. 
c) Asimismo, se aplica a todos los sistemas de información, normas, procedimientos, 
documentación y plataformas técnicas del BANCO y a las auditorías efectuadas sobre los 
mismos. 
d) El Comité Directivo de Riesgos es el responsable de entregar directrices para conformar la
Política de Seguridad de la Información del BANCO, asignar recursos para administrar los 
incidentes de seguridad u otras vulnerabilidades o riesgos.
e) El departamento de Ciberseguridad como segunda línea de defensa debe implementar en 
coordinación con las áreas correspondientes los controles necesarios para fortalecer el 
Sistema de Gestión de Seguridad de la información, fomentar planes de difusión, capacitación 
y formación de la cultura de seguridad de la información.
f) El departamento de Riesgo Operativo también como segunda línea de defensa realiza 
autoevaluaciones de los procesos críticos del Banco, a fin de identificar oportunidades de 
mejora en los procesos y evitar incidentes que puedan materializarse.
g) Como tercera línea de defensa el área de auditoria verificará el cumplimiento de la normativa 
interna.
h) En sujeción al estándar IEC/ISO/270021
la revisión de Políticas, Normas y Procedimientos lo 
realizarán unidades independientes internas y/o externas a las distintas áreas del Banco.
i) Los casos en los que no fuera posible la aplicación de la presente Política de Seguridad de la 
Información, se considerarán como excepciones. Estos deberán ser informados a la Gerencia de 
Riesgo Integral para luego ser analizados para evaluar el riesgo que podrían introducir al 
ecosistema del Banco.
j) Los casos que se identifiquen no ser cubiertos por la presente Política de Seguridad de la 
Información, serán informados a la Gerencia de Riesgo Integral con el fin de analizar y evaluar el 
riesgo que podría conducir en la implementación de nuevos lineamientos de Seguridad de la 
información.
Los Propietarios de la Información brindarán apoyo a la revisión periódica del cumplimiento de la 
política, normas, procedimientos y otros requisitos de seguridad aplicables.
3.- Cumplimiento con Requerimientos Legales 
Con apoyo de asesoría legal se definirán y documentarán claramente todos los requisitos normativos 
y contractuales pertinentes para cada sistema de información. 
 
1 Revisión independiente de la seguridad en la información, dicha revisión la deberían realizar personas independientes del área bajo revisión, 
es decir la función de auditoria interna, un gerente independiente o una organización externa que se especialice en dichas revisiones. Las 
personas que realizan estas revisiones deberían contar con las habilidades y experiencia adecuada.
Cualquier documento impreso diferente del original y cualquier archivo electrónico que se encuentre fuera de la Intranet del 
Banco Ganadero S.A., será considerada COPIA NO CONTROLADA.
Versión: 1.9
POLÍTICA DE SEGURIDAD 
DE LA INFORMACIÓN 
Código:
PS - 001 
Página 36 de 42
Se redactará un Compromiso de Confidencialidad para ser firmado por todo el personal. 
a. Identificación de Legislación Aplicable: El diseño, operación, uso y administración de los 
sistemas de información del BANCO están regulados por disposiciones legales y 
contractuales. 
b. Derechos de Propiedad Intelectual: Se implementarán procedimientos adecuados para 
garantizar el cumplimiento de las restricciones legales al uso del material protegido por 
normas de propiedad intelectual.
Los funcionarios únicamente podrán utilizar material autorizado por el BANCO. 
El BANCO sólo autorizará el uso de material producido por él mismo, o material autorizado o 
suministrado al BANCO por medio de su representante legal, conforme los términos y 
condiciones acordadas y lo dispuesto por la normativa vigente. 
La infracción a estos derechos puede recaer como resultado acciones legales que podrían 
derivar en demandas penales. 
Se cumplirá y hará cumplir lo establecido en: 
❖ Ley N° 1322 – “Ley de Derecho de Autor” del 13 de abril de 1992 y su reglamento de ley 
de derechos de autor con D.S. 23907 del 7 de diciembre de 1994. 
❖ Código Penal de Bolivia, Capitulo X. Delitos contra el Derecho de Autor. Art. 362. (Delitos 
contra la Propiedad Intelectual).- Quien con ánimo de lucro, en perjuicio ajeno, 
reproduzca, plagie, distribuya, publique en pantalla o en televisión, en todo o en parte, 
una obra literaria, artística, musical, científica, televisiva o cinematográfica, o su 
transformación, interpretación, ejecución artística a través de cualquier medio, sin la 
autorización de los titulares de los derechos de propiedad intelectual o de sus 
concesionarios o importe, exporte o almacene ejemplares de dichas obras, sin la referida 
autorización, será sancionado con la pena de reclusión de tres meses a dos años y multa 
de sesenta días.
✓ Derechos de Autoría de Software: En Bolivia el software es considerado una obra 
intelectual que goza de la protección de la Ley 1322 de Derechos de Autor. La misma 
establece que entre las obras que gozan de la protección legal se encuentra:
Art. 6, inciso l): Los programas de ordenador o computación (soporte lógico o software), 
bajo reglamentación específica. 
Por lo tanto, el BANCO, conservará pruebas y evidencias de propiedad de licencias, 
programas fuentes, manuales técnicos del desarrollo, marcas de autor, registros de 
control de versiones, entre otros. 
Se implementarán controles para evitar el exceso del número máximo permitido de 
usuarios por licencias. 
Se verificará que sólo se instalen productos con licencia y software autorizado.
Cualquier documento impreso diferente del original y cualquier archivo electrónico que se encuentre fuera de la Intranet del 
Banco Ganadero S.A., será considerada COPIA NO CONTROLADA.
Versión: 1.9
POLÍTICA DE SEGURIDAD 
DE LA INFORMACIÓN 
Código:
PS - 001 
Página 37 de 42
c. Protección de los Registros del BANCO: Los registros críticos del BANCO se protegerán 
contra pérdida, destrucción y falsificación.
Algunos registros pueden requerir una retención segura para cumplir requisitos legales o 
normativos, así como para respaldar actividades esenciales del BANCO. Por lo tanto, los 
registros se clasificarán detallando los períodos de retención y el tipo de medios de 
almacenamiento, por ejemplo: papel, medios magnéticos u ópticos. 
Si se seleccionan medios de almacenamiento electrónicos, se deben incluir los 
procedimientos para garantizar la capacidad de acceso a los datos durante todo el período 
de retención, a fin de salvaguardar los mismos contra eventuales pérdidas ocasionadas por 
futuros cambios tecnológicos. 
Los sistemas de almacenamiento de datos serán seleccionados de modo tal que los datos 
requeridos puedan recuperarse de una manera que resulte aceptable para un tribunal de 
justicia, por ejemplo: que todos los registros requeridos puedan recuperarse en un plazo y un 
formato aceptable.
Protección de Datos y Privacidad de la Información Personal: Todos los empleados deberán 
conocer las restricciones al tratamiento de los datos y de la información respecto a la cual tengan 
conocimiento con motivo del ejercicio de sus funciones.
Se redactará un “Compromiso de Confidencialidad”, el cual será firmado por todos los 
funcionarios. La copia firmada del compromiso será retenida en forma segura. Mediante este 
instrumento el empleado se comprometerá a utilizar la información solamente para el uso 
específico al que se ha destinado y a no comunicar, diseminar o de alguna otra forma hacer 
pública la información a ninguna persona, firma, compañía o tercera persona, salvo 
autorización previa y explicita. A través del “Compromiso de Confidencialidad” se advertirá al 
empleado que determinadas actividades pueden ser objeto de control y monitoreo. 
 En particular, se tendrán presentes las siguientes normas y legislaciones vigentes: 
❖ Código Penal de Bolivia. CAPITULO III Falsificación de Documentos en General. Art. 
198°.- (FALSEDAD MATERIAL).- El que forjare en todo o en parte un documento público 
falso o alterare uno verdadero, de modo que pueda resultar perjuicio, incurrirá en 
privación de libertad de uno a seis años.
❖ Código Penal de Bolivia. CAPITULO III Falsificación de Documentos en General. Art. 
199.- (FALSEDAD IDEOLOGICA).- El que insertare o hiciere insertar en un instrumento 
público verdadero declaraciones falsas concernientes a un hecho que el documento deba 
probar, de modo que pueda resultar perjuicio, será sancionado con privación de libertad 
de una a seis años. 
❖ Código Penal de Bolivia. CAPITULO III Falsificación de Documentos en General. Art. 
200.- (FALSIFICACION DE DOCUMENTO PRIVADO).- El que falsificare material o 
ideológicamente un documento privado, incurrirá en privación de libertad de seis meses 
a dos años, siempre que su uso pueda ocasionar algún perjuicio. 
Cualquier documento impreso diferente del original y cualquier archivo electrónico que se encuentre fuera de la Intranet del 
Banco Ganadero S.A., será considerada COPIA NO CONTROLADA.
Versión: 1.9
POLÍTICA DE SEGURIDAD 
DE LA INFORMACIÓN 
Código:
PS - 001 
Página 38 de 42
❖ Código Penal de Bolivia. CAPITULO III Falsificación de Documentos en General. Art. 
203.- (USO DE INSTRUMENTO FALSIFICADO).- El que a sabiendas hiciere uso de un 
documento falso o adulterado, será sancionado como si fuera autor de la falsedad.
❖ Código Penal de Bolivia. CAPITULO XI Delitos informáticos. Artículo 363 bis.-
(MANIPULACION INFORMATICA).- El que con la intención de obtener un beneficio 
indebido para sí o un tercero, manipule un procesamiento o transferencia de datos 
informáticos que conduzca a un resultado incorrecto o evite un proceso tal cuyo resultado 
habría sido correcto, ocasionando de esta manera una transferencia patrimonial en 
perjuicio de tercero, será sancionado con reclusión de uno a cinco años y con multa de 
sesenta a doscientos días.
❖ Ley de Bancos y Entidades Financieras. TITULO SEXTO. CAPITULO I. SECRETO 
BANCARIO: Artículo 86º, Artículo 87º, Artículo 88º, Artículo 89º, Artículo 90º 
❖ Otras que se establezcan en un futuro 
d. Prevención del Uso Inadecuado de los Recursos de Procesamiento de Información: Los 
recursos de procesamiento de información del BANCO se suministran con un propósito 
determinado. Toda utilización de estos recursos con propósitos no autorizados o ajenos al 
destino por el cual fueron provistos será considerada como uso indebido.
Todos los empleados deberán conocer el alcance preciso del uso adecuado de los recursos 
informáticos y respetarlo. 
e. Regulación de Controles para el Uso de Criptografía: Al utilizar firmas digitales o 
electrónicas, se hará referencia a lo establecido en la LEY GENERAL DE 
TELECOMUNICACIONES, TECNOLOGÍAS DE INFORMACIÓN Y COMUNICACIÓN. Ley 
164 (8-Agosto-2011). (Vigente), que rige las condiciones bajo las cuales una firma digital es 
legalmente válida: 
❖ Artículo 78. (VALIDEZ JURÍDICA). Tienen validez jurídica y probatoria: 
El acto o negocio jurídico realizado por persona natural o jurídica en documento digital y 
aprobado por las partes a través de firma digital, celebrado por medio electrónico u otro de 
mayor avance tecnológico. 
El mensaje electrónico de datos. 
La firma digital. 
❖ Artículo 87. (VALORACIÓN).
Los documentos digitales carentes de firma digital, serán admisibles como principio de 
prueba o indicios. 
Se tomará en cuenta la confiabilidad de la forma en que se haya generado, archivado y
comunicado el documento digital, la forma en que se haya conservado la integridad de la
información, y la forma en la que se identifique a su iniciador y cualquier otro factor pertinente. 
4.- Cumplimiento Técnico 
a. Verificación del Cumplimiento Técnico: Se verificará periódicamente que los sistemas
críticos de información cumplan con la política, normas y procedimientos de seguridad, las 
que incluirán la revisión de los sistemas en producción a fin de garantizar que los controles 
Cualquier documento impreso diferente del original y cualquier archivo electrónico que se encuentre fuera de la Intranet del 
Banco Ganadero S.A., será considerada COPIA NO CONTROLADA.
Versión: 1.9
POLÍTICA DE SEGURIDAD 
DE LA INFORMACIÓN 
Código:
PS - 001 
Página 39 de 42
de hardware y software hayan sido correctamente implementados. En caso de ser necesario, 
estas revisiones contemplarán la asistencia técnica especializada (por profesionales 
experimentados). 
b. Hacking Ético, Test de Penetración y Análisis de Vulnerabilidades: La verificación del 
cumplimiento de seguridad informática deberá comprender pruebas de penetración (Hacking 
Ético) y tendrá como objetivo la detección de vulnerabilidades y la probabilidad de impacto en 
el sistema, así como la verificación de la eficacia de los controles con relación a la prevención 
de accesos no autorizados. 
La gestión de pruebas de Hacking Ético y el cumplimiento de la norma internacional PCIDSS 
(Estándar de Seguridad para Datos de Tarjetas de Pago), deberán enmarcarse en las 
instrucciones del ente regulador ASFI1
:
✓ Las pruebas de Hacking Ético deberán realizarse al menos una vez al año, y luego de 
cambios importantes en la infraestructura tecnológica. 
✓ El personal que realiza las pruebas deberá estar certificado y acreditar experiencia en 
este tipo de trabajos. 
✓ Las pruebas deberán estar basadas en procesos estándar de Hacking Ético. 
✓ Se supervisará de forma anual el estado de cumplimiento de las normas PCI DSS en el 
Banco y por parte de los proveedores de servicios para el procesamiento de información 
de tarjetas de pago. 
 
5.- Consideraciones para Auditorías de Sistemas de Información 
Con relación a las auditorías a los sistemas de información, serán de aplicación las Normas que rigen 
el control interno del BANCO, la recopilación de normas de la ASFI, buenas prácticas de control como 
ser: COBIT (Objetivos de Control para Tecnologías de la Información y Relacionados), ISO/IEC/27000
entre otros que el Auditor considere oportunos. 
a. Controles de Auditoría de Sistemas: Cuando se realicen actividades de auditoría que 
involucren verificaciones de los sistemas en producción, se deberá tomar recaudos en la 
planificación de los requerimientos y tareas, y se acordará con las áreas involucradas a 
efectos de minimizar el riesgo de interrupciones en las operaciones.
b. Protección de las Herramientas de Auditoria de Sistemas: Se deberá proteger el acceso 
a las herramientas y recursos utilizados en las auditorías de sistemas, a fin de evitar el mal 
uso o el compromiso de ellas.
Cualquier documento impreso diferente del original y cualquier archivo electrónico que se encuentre fuera de la Intranet del 
Banco Ganadero S.A., será considerada COPIA NO CONTROLADA.
Versión: 1.9
POLÍTICA DE SEGURIDAD 
DE LA INFORMACIÓN 
Código:
PS - 001 
Página 40 de 42
SECCIÓN XIII. CONTROL DE EDICIONES
Versión: Motivo de revisión Modificaciones realizadas 
1.8
Actualización del Documento. 
Se incluyen los siguientes puntos:
- Lineamientos para dispositivos BYOD 
(Dispositivos propios)
- Ajustes en la frecuencia de revisión del 
entorno PCI-DSS
Se realizan adecuaciones en el punto:
- Lineamientos de seguridad para teletrabajo
(Acta de Directorio N.º 18/2022)
Fecha: 
30/06/2022
Versión: Motivo de revisión Modificaciones realizadas 
1.7
Actualización del Documento. - Ratificación del documento por el Directorio 
del Banco. (Acta N.º 06/2022) Fecha: 
17/02/2022
Versión: Motivo de revisión Modificaciones realizadas 
1.6
Actualización del documento.
Revisión de la política en los siguientes puntos:
• SECCIÓN IV. SEGURIDAD DE 
RECURSOS HUMANOS
Durante el empleo.
• SECCIÓN VI. GESTIÓN DE 
COMUNICACIONES Y PROCESAMIENTO 
DE INFORMACIÓN
Gestión de Seguridad en Redes
SWIFT Interbank Financial 
Telecommunication
• SECCIÓN VII CONTROL DE ACCESOS
Administración de Accesos de Usuarios.
• SECCION XI. COMPUTACIÓN EN LA 
NUBE
Aspectos de la Seguridad de la 
Información en la Gestión de Servicios en 
la Nube
• SECCIÓN XII. CUMPLIMIENTO
Responsabilidades
Fecha: 
23/09/2021
Versión: Motivo de revisión Modificaciones realizadas 
1.5 Actualización del documento. Revisión de la política en los siguientes puntos:
Fecha: • II. GESTIÓN DE ACTIVOS
Cualquier documento impreso diferente del original y cualquier archivo electrónico que se encuentre fuera de la Intranet del 
Banco Ganadero S.A., será considerada COPIA NO CONTROLADA.
Versión: 1.9
POLÍTICA DE SEGURIDAD 
DE LA INFORMACIÓN 
Código:
PS - 001 
Página 41 de 42
14/05/2020
Clasificación de la Información.
• III. GESTION DE RIESGOS DE 
SEGURIDAD DE LA INFORMACION
Objetivo
Lineamientos de la Gestión de Riesgos 
Responsabilidades
• VII CONTROL DE ACCESOS
Requerimientos para el control de accesos
Computación móvil, comunicaciones 
virtuales y teletrabajo.
• VIII ADQUISISCION, DESARROLLO Y 
MANTENIMIENTO DE SISTEMAS DE 
INFORMACIÓN
Controles Criptográficos
Versión: Motivo de revisión Modificaciones realizadas 
1.4
Actualización del documento.
Revisión de la política en los siguientes puntos:
• INTRODUCCIÓN
Seguridad de la Información
Estrategia de la Seguridad de la 
información
Alcance
Aprobación y publicación del Documento
• I SOBRE LA POLITICA DE SEGURIDAD 
DE LA INFORMACION
Revisión de la Política de Seguridad de la 
Información
• V GESTION DE COMUNICACIONES Y 
PROCESAMIENTO DE INFORMACION
Administración de Respaldos (Back Ups)
• VIII GESTION DE INCIDENTES DE 
SEGURIDAD DE LA INFORMACIÓN
Gestión de Incidentes y Mejoras en la 
Seguridad de la Información
• X COMPUTACIÓN EN LA NUBE
Fecha: 
21/03/2019
Versión: Motivo de revisión Modificaciones realizadas 
1.3
Actualización del documento. Revisión general de la Política de Seguridad de 
la Información. Fecha: 
16/01/2018
Versión: Motivo de revisión Modificaciones realizadas 
1.2
Actualización del documento.
- Inclusión del punto XI. COMPUTACIÓN 
EN LA NUBE
- Adecuación al nuevo formato de 
documentos.
Fecha: 
10/04/2017
Cualquier documento impreso diferente del original y cualquier archivo electrónico que se encuentre fuera de la Intranet del 
Banco Ganadero S.A., será considerada COPIA NO CONTROLADA.
Versión: 1.9
POLÍTICA DE SEGURIDAD 
DE LA INFORMACIÓN 
Código:
PS - 001 
Página 42 de 42
- Adecuación a la nueva estructura 
organizacional del Banco.
Versión: Motivo de revisión Modificaciones realizadas 
1.1 
Fecha: Actualización del documento. Adecuación a la CIRCULAR ASFI/193/2013. 
06/11/2014 
Versión: Motivo de revisión Modificaciones realizadas 
1.0 
Fecha: Creación del documento. Todo el Documento. 
24/01/2013 
