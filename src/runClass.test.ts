import {SourceClass} from "./sourceClass";
import {Severity} from "jest-allure/dist/Reporter";


test("adds 1 + 2 to equal 3", async () => {
        const reporter = global.reporter;
        reporter
            .description("Check add function")
            .story("CALCULATOR-Test")
            .severity(Severity.Critical)
            .testId('TEST-01');
        reporter.startStep("Run the calculation");
        const sc = new SourceClass();
        let result = sc.sum(1, 2)
        expect(result).toBe(3);
        reporter.startStep(`The result is: ${result}`);
        console.log(`The result is: ${result}`);
    },
);
