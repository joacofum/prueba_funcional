import java.util.List;

public class main {
    public static void main(String[] args){
        List<Integer> cantidad = List.of(10, 20, 70);
        int iva = 40;

        int primerFuncion = calcularTotalFactura(cantidad, iva);
        int segundaFuncion = calcularTotalFacturaSinPasarIVA(cantidad);

        System.out.println(primerFuncion);
        System.out.println(segundaFuncion);



    }
    public static int calcularTotalFactura(List<Integer> cantidad, int iva){
        int total = cantidad.stream().reduce(0, Integer::sum);
        int ivaFactura = total * iva/100;
        return total + ivaFactura;

    }

    public static int calcularTotalFacturaSinPasarIVA(List<Integer> cantidad){
        int total = cantidad.stream().reduce(0, Integer::sum);
        int ivaFactura = total * 21/100;
        return total + ivaFactura;
    }
}
