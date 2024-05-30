import { List } from "@chakra-ui/react";
import { TodoItem } from "./TodoItem";
import { TodoTitle } from "./TodoTitle";

export const TodoList = ({
        todoList,
        toggleTodoListItemStatus,
        deleteTodoListItem,
        title,
        as,
        fontSize
}) => {
    // タイトルも管理することで、タスクがなくなったときに非表示にすることが可能になる。
    return (
        <>
            {todoList.length !== 0 && (
                <>
                    <TodoTitle title={title} as={as} fontSize={fontSize} mt="12" />
                    <List w="full">
                        {todoList.map((todo) => 
                            <TodoItem
                                todo={todo}
                                toggleTodoListItemStatus={toggleTodoListItemStatus}
                                deleteTodoListItem={deleteTodoListItem}
                                key={todo.id}
                            />
                        )}
                    </List>
                </>
            )}
        </>
    );
};