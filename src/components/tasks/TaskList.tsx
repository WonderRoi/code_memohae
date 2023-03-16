import { useRouter } from "next/router";
import { Card } from "semantic-ui-react";
import { Task } from "src/interfaces/Tasks";

interface Props {
  tasks: Task[];
}

export const TaskList = ({ tasks = [] }: Props) => {
  const router = useRouter();

  return (
    <Card.Group itemsPerRow={4}>
      {Array.isArray(tasks) &&
        tasks.map((task) => (
          <Card onClick={() => router.push(`/tasks/edit/${task.id}`)} key={task.id}>
            <Card.Content>
              <Card.Header>{task.title}</Card.Header>
              {/* ... */}
            </Card.Content>
          </Card>
        ))}
    </Card.Group>
  );
};
