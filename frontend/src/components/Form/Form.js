import { Form, Input, InputNumber, Button } from "antd";
const layout = {
	labelCol: {
		span: 8,
	},
	wrapperCol: {
		span: 16,
	},
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
	required: "${label} is required!",
	types: {
		email: "${label} is not a valid email!",
		number: "${label} is not a valid number!",
	},
	number: {
		range: "${label} must be between ${min} and ${max}",
	},
};
/* eslint-enable no-template-curly-in-string */

const FormComponent = () => {
	const onFinish = (values) => {
		console.log(values);
	};

	return (
		<div className='form__container'>
			<Form
				{...layout}
				style={{}}
				name='nest-messages'
				onFinish={onFinish}
				validateMessages={validateMessages}>
				<Form.Item name={["user", "name"]} label='Имя' rules={[{}]}>
					<Input placeholder='Кабанчик' />
				</Form.Item>
				<Form.Item
					name={["user", "email"]}
					label='Email'
					rules={[
						{
							type: "email",
						},
					]}>
					<Input placeholder='pole_chudes@hackathon.com' />
				</Form.Item>
				<Form.Item name={["user", "team"]} label='Команда' rules={[{}]}>
					<Input placeholder='Frontend' />
				</Form.Item>
				<Form.Item
					name={["user", "age"]}
					label='Возраст'
					rules={[
						{
							type: "number",
							min: 0,
							max: 99,
						},
					]}>
					<InputNumber placeholder='25' />
				</Form.Item>
				<Form.Item name={["user", "website"]} label='Github'>
					<Input />
				</Form.Item>
				<Form.Item name={["user", "introduction"]} label='О себе'>
					<Input.TextArea placeholder='Жсон это моя страсть!' />
				</Form.Item>
				<Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
					<Button type='primary' htmlType='submit'>
						Сохранить
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};
export default FormComponent;
