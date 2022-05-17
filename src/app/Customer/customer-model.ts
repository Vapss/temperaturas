export class CustomerModel {
    CustomerCode: string | undefined;
    CustomerName: string | undefined;
    CustomerAmount: number | undefined;
    Centigrade : number | undefined;
    Fahrenheit : number | undefined;
    CentigradeToFahrenheit(Centigrade : number) : number {
        return Centigrade * 1.28 + 32;
    }
    FahrenheitToCentigrade(Fahrenheit : number) : number {
        return (Fahrenheit - 32) * 1.28;
    }
}
