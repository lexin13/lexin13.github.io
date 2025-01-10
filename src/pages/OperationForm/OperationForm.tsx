import React from "react";
import { useForm, SubmitHandler } from 'react-hook-form';
import style from './OperationForm.module.scss';
import cn from 'clsx';
import { ErrorLabel } from '../../shared/common/ErrorLabel/ErrorLabel';

interface OperationFormInputs {
    amount: number;
    category: string;
    name: string;
    description: string;
    date: string;
}

export const OperationForm: React.FC = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<OperationFormInputs>();
    const onSubmitOperation: SubmitHandler<OperationFormInputs> = (data) => {
        console.log('Operation Data:', data);
    };

    return (
        <div className={style.operationForm}>
            <div className={style.title}>Operation</div>
            <form onSubmit={handleSubmit(onSubmitOperation)}>
                <div className={style.formGroup}>
                    <label>Category</label>
                    <input
                        {...register('category', {
                            required: 'Required field'
                        })}
                        className={cn({ [style.inputError]: errors.category })}
                    />
                    {errors.category && <ErrorLabel message={errors.category.message} />}
                </div>
                <div className={style.formGroup}>
                    <label>Name</label>
                    <input
                        {...register('name', {
                            required: 'Required field'
                        })}
                        className={cn({ [style.inputError]: errors.name })}
                    />
                    {errors.name && <ErrorLabel message={errors.name.message} />}
                </div>
                <div className={style.formGroup}>
                    <label>Amount</label>
                    <input type="number"
                        {...register('amount', {
                            required: 'Required field'
                        })}
                        className={cn({ [style.inputError]: errors.amount })}
                    />
                    {errors.amount && <ErrorLabel message={errors.amount.message} />}
                </div>
                <div className={style.formGroup}>
                    <label>Date</label>
                    <input type="date"
                        {...register('date', {
                            required: 'Required field'
                        })}
                        className={cn({ [style.inputError]: errors.date })}
                    />
                    {errors.date && <ErrorLabel message={errors.date.message} />}
                </div>
                <div className={style.formGroup}>
                    <label>Description</label>
                    <input
                        {...register('description', {
                            required: 'Required field'
                        })}
                        className={cn({ [style.inputError]: errors.description })}
                    />
                    {errors.description && <ErrorLabel message={errors.description.message} />}
                </div>
                <button type="submit" className={style.btn}>Save</button>
            </form>
        </div>
    )
};