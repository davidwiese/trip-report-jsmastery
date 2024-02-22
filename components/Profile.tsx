import PromptCard from "./PromptCard";
import { ReactNode } from "react";

interface ProfileProps {
	name: string;
	desc: string;
	data: Array<{ _id: string /* Other properties */ }>;
	handleEdit: (post: any) => void; // Assuming 'post' is of type 'any'
	handleDelete: (post: any) => void; // Assuming 'post' is of type 'any'
}

const Profile: React.FC<ProfileProps> = ({
	name,
	desc,
	data,
	handleEdit,
	handleDelete,
}) => {
	return (
		<section className="w-full">
			<h1 className="head_text text-left">
				<span className="blue_gradient">{name} Profile</span>
			</h1>
			<p className="desc text-left">{desc}</p>
			<div className="mt-10 prompt_layout">
				{Array.isArray(data) &&
					data.map((post) => (
						<PromptCard
							key={post._id}
							post={post}
							handleEdit={() => handleEdit && handleEdit(post)}
							handleDelete={() => handleDelete && handleDelete(post)}
							handleTagClick={undefined}
						/>
					))}
			</div>
		</section>
	);
};

export default Profile;
