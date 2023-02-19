import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '../../../app/component/Button/Button';
import { Input, TextArea, Error, Label } from '../../../app/component/Form/Input.styled';
import { TaskModel } from '../model/Task.model';
import { Form, FormWrapper, InputWrapper } from './TaskForm.style';

export const TaskForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TaskModel.Single>();

  const onSubmit: SubmitHandler<TaskModel.Single> = () => {};

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormWrapper>
        <InputWrapper>
          <Label>Task Name</Label>
          <Input {...register('title', { required: true })} />
          {errors.title && <Error>Title is required</Error>}
        </InputWrapper>

        <InputWrapper>
          <Label>Description</Label>
          <TextArea rows={6} {...register('description', { required: true })} />
          {errors.description && <Error>Description is required</Error>}
        </InputWrapper>

        <Button type="submit">Add task</Button>
      </FormWrapper>
    </Form>
  );
};
