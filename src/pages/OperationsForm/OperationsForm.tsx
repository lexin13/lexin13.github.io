import React from "react";
import cn from "clsx";
import style from "./OperationsForm.module.css";
import { OperationListProps, OperationListWithButton } from "src/shared/banking/OperationList/OperationListWithButton";
import { createRandomOperation } from 'src/shared/banking/operation/OperationTypes';

const initOperations: OperationListProps = {
    operations: [
        createRandomOperation(new Date().toISOString()),
        createRandomOperation(new Date().toISOString()),
    ]
}

export const OperationsForm: React.FC = () => {
    return (<OperationListWithButton {...initOperations} />)
};