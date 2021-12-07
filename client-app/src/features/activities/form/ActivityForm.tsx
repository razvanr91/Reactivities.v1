import React from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
	activity: Activity | undefined;
	closeForm: () => void;
}

export default function ActivityForm({ activity, closeForm }: Props) {
	return (
		<Segment clearing>
			<Form>
				<Form.Field>
					<label>Title</label>
					<input type="text" placeholder="Title" />
				</Form.Field>
				<Form.Field>
					<label>Description</label>
					<textarea placeholder="Description" />
				</Form.Field>
				<Form.Field>
					<label>Category</label>
					<input type="text" placeholder="Category" />
				</Form.Field>
				<Form.Field>
					<label>Date</label>
					<input type="text" placeholder="Date" />
				</Form.Field>
				<Form.Field>
					<label>City</label>
					<input type="text" placeholder="City" />
				</Form.Field>
				<Form.Field>
					<label>Venue</label>
					<input type="text" placeholder="Venue" />
				</Form.Field>
				<Button floated="right" positive type="submit" content="Submit" />
				<Button onClick={closeForm} floated="right" type="button" content="Cancel" />
			</Form>
		</Segment>
	);
}
