// SPDX-License-Identifier: Apache-2.0
import { Text } from '@interlink/react/primitives';
import { Avatar } from '@interlink/react/avatar';
import { Comment, CommentAction, CommentAuthor, CommentEdited, CommentTime } from '@interlink/react/comment';

/** Title: Thread */
export default function Example() {
  return (
    <Comment
      avatar={<Avatar name="Nia Park" label="" />}
      author={<CommentAuthor href="#nia">Nia Park</CommentAuthor>}
      time={<CommentTime>2 hours ago</CommentTime>}
      content={<Text>The new filters make the board much faster to scan. Can we ship them this sprint?</Text>}
      actions={[<CommentAction key="reply">Reply</CommentAction>, <CommentAction key="like">Like</CommentAction>]}
    >
      <Comment
        avatar={<Avatar name="Kai Moto" label="" />}
        author={<CommentAuthor href="#kai">Kai Moto</CommentAuthor>}
        time={<CommentTime>1 hour ago</CommentTime>}
        edited={<CommentEdited />}
        content={<Text>Yes, they are ready for review.</Text>}
        actions={[<CommentAction key="reply">Reply</CommentAction>]}
      />
    </Comment>
  );
}
