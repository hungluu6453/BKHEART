--CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE policies (
	policy_id serial NOT NULL,
	policy_name text NOT NULL,
	PRIMARY KEY(policy_id)
);

CREATE TABLE paragraph(
	para_id serial NOT NULL,
	po_id int NOT NULL,
	para_content text NOT NULL,
	PRIMARY KEY(para_id),
	CONSTRAINT fk_policy FOREIGN KEY(po_id) REFERENCES policies(policy_id)
);

CREATE TABLE voice (
	voice_id serial NOT NULL,
	voice_filename text NOT NULL,
	PRIMARY KEY(voice_id)
);

CREATE TABLE conversation (
	conversation_id varchar(36) NOT NULL,
	PRIMARY KEY(conversation_id)
);

CREATE TABLE utterance (
	utterance_id serial NOT NULL,
	utterance_content text NOT NULL,
	isInput boolean NOT NULL,
	conv_id varchar(36) NOT NULL,
	time_st timestamp NOT NULL,
	pa_id int,
	v_id int,
	PRIMARY KEY(utterance_id),
	CONSTRAINT fk_paragraph FOREIGN KEY(pa_id) REFERENCES paragraph(para_id),
	CONSTRAINT fk_voice FOREIGN KEY(v_id) REFERENCES voice(voice_id),
	CONSTRAINT fk_conversation FOREIGN KEY(conv_id) REFERENCES conversation(conversation_id)
);

INSERT INTO public.policies(policy_id, policy_name)
VALUES
(1, 'Quy che dao tao tien si'),
(2, 'Quy dinh cau truc CTDT 2021'),
(3, 'Quy dinh giang day'),
(4, 'Quy dinh to chuc dao tao trinh do thac si'),
(5, 'Quy dinh ve dao tao hoc vu');

select * from public.paragraph;