const deleteButton = document.getElementById('delete-button');

deleteButton.addEventListener('click', () => {
  const userConfirmed = confirm('Êtes-vous sûr de vouloir supprimer cette recette ?');
  if (userConfirmed) {
    alert('Recette supprimée avec succès !');
    // Logic to delete the recipe can go here (e.g., API call or DOM manipulation)
  }
});
