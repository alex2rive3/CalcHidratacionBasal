# CALCULADORA DE HIDRATACION BASAL
Esta calculadora fue desarrollada a partir de la necesidad de los doctores de Terapia Intenciva con la finalidad de agilizar unos calculos que son necesarios para saber la cantidad de Suero es necesario para que un paciente se encuentre bien hidratado mientras esta en cuidados intensibos.

### Datos a Considerar 
VolumenDiario = cantidad de suero necesrio en un dia en mililitros 
Mantenimiento = es 

### Funcionamineto
Esto realiza las siguietes operaciones a partir del peso del paciente 
```bash
volumnDiario = peso * 100
```
siempre que el peso del paciente sea entre 1 y 10 kg
Cuando sea entres 11 y 20 se realiza la operacion 
```bash 
volumenDiario = 1000+ ((peso-10)*50)
```
Y cuando ya el paciente pesa entre los 21 y 30 kg la operacion es 

```bash
volumenDiario = 1500 + ((Peso-20) * 20)
```
