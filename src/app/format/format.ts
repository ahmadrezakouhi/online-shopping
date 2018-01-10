export class Format{

    formatNumber(data){
        var l10nIR = new Intl.NumberFormat("IR");
        return l10nIR.format(data);

    }
    
}
