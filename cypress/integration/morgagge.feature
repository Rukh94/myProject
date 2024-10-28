Feature: Calculate Mortgage

Scenario Outline:1 Calculate Mortgage rate with given values and default values

    Given I am on the Mortgage calculator website

    When I enter the following data

    | Field       | Value |

    | homeValue   | 50000 |

    | downPayment | 20000 |

    | intrestRate | 5     |

    | loanTerm    | 25    |

    | startMonth  | Sep   |

    | startYear   | 2024  |

    When accept default value for all the remaining values

    When I click on calculate link

    # Then I should get mortgage offer with "<totalMonthlyPayment>", "<downPaymentAmount>", "<downPaymentPercentage>", "<loanPayoffDate>", "<totalIntrestPaid>" and "<monthlyTaxPaid>"

    # Examples:

    #   | totalMonthlyPayment | downPaymentAmount | downPaymentPercentage | loanPayoffDate | totalIntrestPaid | monthlyTaxPaid |

    #   | $600.38             | $20,000.00        | 40.00%                | Aug, 2024      | $22,613.10       | $225.00        |