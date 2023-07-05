var calculator1 = Desmos.GraphingCalculator(document.getElementById('calculator1'), { expressions: false, projectorMode: true });

    calculator1.setExpression({
        id: '1',
        latex: 'y=2x-4',
        color: Desmos.Colors.BLUE
    });

    calculator1.setExpression({
        id: '2',
        latex: '(0, -4)',
        color: Desmos.Colors.RED,
        showLabel: true
    });

    calculator1.setExpression({
        id: '3',
        latex: '(2, 0)',
        color: Desmos.Colors.GREEN,
        showLabel: true
    });

    calculator1.setMathBounds({
        left: -3,
        right: 4,
        bottom: -5,
        top: 2
    });