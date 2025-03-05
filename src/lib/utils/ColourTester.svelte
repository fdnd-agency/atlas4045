<details>
	<summary>
		<span>Colour tester</span>
	</summary>
	<div class="container">
		<div class="row brown white">
			<div class="colour c100"></div>
			<div class="colour c200"></div>
			<div class="colour c300"></div>
			<div class="colour c400"></div>
			<div class="colour c500"></div>
			<div class="colour c600"></div>
			<div class="colour c700"></div>
			<div class="colour c800"></div>
			<div class="colour c900"></div>
		</div>

		<div class="row brown black">
			<div class="colour c100"></div>
			<div class="colour c200"></div>
			<div class="colour c300"></div>
			<div class="colour c400"></div>
			<div class="colour c500"></div>
			<div class="colour c600"></div>
			<div class="colour c700"></div>
			<div class="colour c800"></div>
			<div class="colour c900"></div>
		</div>

		<div class="row blue white">
			<div class="colour c100"></div>
			<div class="colour c200"></div>
			<div class="colour c300"></div>
			<div class="colour c400"></div>
			<div class="colour c500"></div>
			<div class="colour c600"></div>
			<div class="colour c700"></div>
			<div class="colour c800"></div>
			<div class="colour c900"></div>
		</div>
		<div class="row blue black">
			<div class="colour c100"></div>
			<div class="colour c200"></div>
			<div class="colour c300"></div>
			<div class="colour c400"></div>
			<div class="colour c500"></div>
			<div class="colour c600"></div>
			<div class="colour c700"></div>
			<div class="colour c800"></div>
			<div class="colour c900"></div>
		</div>

		<div class="row cyan white">
			<div class="colour c100"></div>
			<div class="colour c200"></div>
			<div class="colour c300"></div>
			<div class="colour c400"></div>
			<div class="colour c500"></div>
			<div class="colour c600"></div>
			<div class="colour c700"></div>
			<div class="colour c800"></div>
			<div class="colour c900"></div>
		</div>
		<div class="row cyan black">
			<div class="colour c100"></div>
			<div class="colour c200"></div>
			<div class="colour c300"></div>
			<div class="colour c400"></div>
			<div class="colour c500"></div>
			<div class="colour c600"></div>
			<div class="colour c700"></div>
			<div class="colour c800"></div>
			<div class="colour c900"></div>
		</div>

		<div class="row neutral white">
			<div class="colour c100"></div>
			<div class="colour c200"></div>
			<div class="colour c300"></div>
			<div class="colour c400"></div>
			<div class="colour c500"></div>
			<div class="colour c600"></div>
			<div class="colour c700"></div>
			<div class="colour c800"></div>
			<div class="colour c900"></div>
		</div>
		<div class="row neutral black">
			<div class="colour c100"></div>
			<div class="colour c200"></div>
			<div class="colour c300"></div>
			<div class="colour c400"></div>
			<div class="colour c500"></div>
			<div class="colour c600"></div>
			<div class="colour c700"></div>
			<div class="colour c800"></div>
			<div class="colour c900"></div>
		</div>
	</div>
</details>

<style>
	details {
		position: fixed;
		top: 0;
		left: 0;
		padding: 4px;
	}

	span {
		font-size: var(--font-size-sm);
	}

	summary {
		cursor: pointer;
		opacity: 0.1;

		&:hover {
			opacity: 1;
		}
	}

	.white {
		background-color: var(--white);
	}

	.black {
		background-color: var(--black);
	}

	.colour {
		width: 2rem;
		height: 2rem;
		border-radius: 25%;
	}

	.row {
		display: flex;
		flex-direction: row;
		gap: 1rem;
    padding: 1rem;
	}

	.brown {
		.c100 {
			background-color: var(--brown-100);
		}
		.c200 {
			background-color: var(--brown-200);
		}
		.c300 {
			background-color: var(--brown-300);
		}
		.c400 {
			background-color: var(--brown-400);
		}   
		.c500 {
			background-color: var(--brown-500);
		}
		.c600 {
			background-color: var(--brown-600);
		}
		.c700 {
			background-color: var(--brown-700);
		}
		.c800 {
			background-color: var(--brown-800);
		}
		.c900 {
			background-color: var(--brown-900);
		}
	}

	.blue {
		.c100 {
			background-color: var(--blue-100);
		}
		.c200  {
			background-color: var(--blue-200);
		}
		.c300 {
			background-color: var(--blue-300);
		}
		.c400 {
			background-color: var(--blue-400);
		}
		.c500 {
			background-color: var(--blue-500);
		}
		.c600 {
			background-color: var(--blue-600);
		}
		.c700 {
			background-color: var(--blue-700);
		}
		.c800 {
			background-color: var(--blue-800);
		}
		.c900 {
			background-color: var(--blue-900);
		}
	} 

	.cyan {
		.c100 {
			background-color: var(--cyan-100);
		}
		.c200 {
			background-color: var(--cyan-200);
		}
		.c300 {
			background-color: var(--cyan-300);
		}
		.c400 {
			background-color: var(--cyan-400);
		}
		.c500 {
			background-color: var(--cyan-500);
		}
		.c600 {
			background-color: var(--cyan-600);
		}
		.c700 {
			background-color: var(--cyan-700);
		}
		.c800 {
			background-color: var(--cyan-800);
		}
		.c900 {
			background-color: var(--cyan-900);
		}
	}

	.neutral {
		.c100 {
			background-color: var(--neutral-100);
		}
		.c200 {
			background-color: var(--neutral-200);
		}
		.c300 {
			background-color: var(--neutral-300);
		}
		.c400 {
			background-color: var(--neutral-400);
		}
		.c500 {
			background-color: var(--neutral-500);
		}
		.c600 {
			background-color: var(--neutral-600);
		}
		.c700 {
			background-color: var(--neutral-700);
		}
		.c800 {
			background-color: var(--neutral-800);
		}
		.c900 {
			background-color: var(--neutral-900);
		}
	}
</style>
