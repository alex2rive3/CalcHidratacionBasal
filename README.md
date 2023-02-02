# CALCULADORA DE HIDRATACION BASAL
Esta calculadora fue desarrollada a partir de la necesidad de los doctores de Terapia Intenciva con la finalidad de agilizar unos calculos que son necesarios para saber la cantidad de Suero es necesario para que un paciente se encuentre bien hidratado mientras esta en cuidados intensibos.

### Datos a Considerar 
VolumenDiario = cantidad de suero necesrio en un dia en mililitros 

Mantenimiento = es el goteo por hora que debe tener la via

Esto realiza los calculo en base al peso del pacinete para esto se debe diferenciar 4 casos en donde cambia el tipo de calculo es es cuando el paciente tiene entre 0 y 10kg el calculo es 
```
volumen Diario = peso * 100
```
cuando el peso es entre 11 y 20ks 
```
volumen Diario = 1000+((peso-10) * 50)
```
Cuando el peso es entre 21 y 30 kg
```
volumen Diario = 1500+((peso-20) * 20)
```
Y el otro caso es cuando ya el paciente pesa mas de 30kg que el calculo ya es mas complejo, y se guia por la Superficie Corporal que se optiene con la siguiente operacion 
```
SuperficieCorporal = ( (peso * 4) + 7) / (peso + 90);
```
y el calculo de volumen Diario en este caso tiene dos variantes que son las siguientes 
```
volumenMayores30kg1 = SuperficieCorporal *1500;
volumenMayores30kg2 = SuperficieCorporal *2000;
```
Para optener el mantenimiento lo unico que se realiza es dividir el volumenDiario entre 24 que son las horas que tiene un dia. 
