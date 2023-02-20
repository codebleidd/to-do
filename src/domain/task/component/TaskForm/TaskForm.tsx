import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '../../../../app/component/Button/Button';
import { Input, TextArea, Error, Label } from '../../../../app/component/Form/Input.styled';
import { useAppDispatch } from '../../../../app/store/appStore.hook';
import { TaskModel } from '../../model/Task.model';
import { TaskAction } from '../../store/task.action';
import { FormStyled, FormWrapper, InputWrapper } from './TaskForm.style';

export const TaskForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<TaskModel.Create>();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<TaskModel.Create> = (data) => {
    dispatch(TaskAction.create(data));
    reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit(onSubmit)}>
      <FormWrapper>
        <InputWrapper>
          <Label>Task Name</Label>
          <Input
            {...register('title', {
              required: true,
              maxLength: { value: 32, message: 'Task name is too long (max. 32).' },
            })}
          />
          {errors.title && <Error>{errors.title.message}</Error>}
        </InputWrapper>

        <InputWrapper>
          <Label>Description</Label>
          <TextArea
            rows={6}
            {...register('description', {
              required: true,
              maxLength: { value: 128, message: 'Task name is too long (max. 128).' },
            })}
          />
          {errors.description && <Error>Description is required</Error>}
        </InputWrapper>

        <Button type="submit">Add task</Button>
      </FormWrapper>
    </FormStyled>
  );
};
